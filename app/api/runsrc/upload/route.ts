import { exec } from "child_process";
import fs, { readFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { OUTPUT_LLVM_IR_ERROR_PLACEHOLDER } from "@/app/constants/constants";
import {
  INTEFUSE_TARGET_NAME,
  OUTPUT_DIR,
  FUSE_EXECUTABLE_ARGS,
} from "../../../constants/constants";

interface ProcessResponse {
  msg: string;
  isErrorCritical: boolean; //should api return
}

async function run_process(src: string): Promise<ProcessResponse> {
  return new Promise((resolve, reject) => {
    exec(src, (error, stdout, stderr) => {
      if (stdout && stderr) {
        resolve({
          msg: String(stderr),
          isErrorCritical: true,
        });
      }

      if (stderr && !stdout) {
        resolve({
          msg: String(stderr),
          isErrorCritical: true,
        });
      }

      const output = stdout;
      resolve({
        msg: output,
        isErrorCritical: false,
      });

      if (error) {
        reject({
          msg: error.message,
          isErrorCritical: true,
        });
      }
    });
  });
}

//Reads file generated by LLVM
function readLLVMIR(): string | null {
  try {
    const filePath: fs.PathOrFileDescriptor = path.join(
      process.cwd(),
      OUTPUT_DIR,
      INTEFUSE_TARGET_NAME.replace(".fuse", ".ll"),
    );

    const text = readFileSync(filePath, {
      encoding: "utf8",
    });

    return text ? text : null;
  } catch (err: any) {
    console.error("Error reading IR:", err);
    return null;
  }
}

function clean_up() {
  //search & delete for output.fuse
  const FuseFile: fs.PathOrFileDescriptor = path.join(
    process.cwd(),
    OUTPUT_DIR,
    INTEFUSE_TARGET_NAME,
  );

  if (fs.existsSync(FuseFile)) {
    fs.unlink(FuseFile, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }

  const IRFile: fs.PathOrFileDescriptor = path.join(
    process.cwd(),
    OUTPUT_DIR,
    INTEFUSE_TARGET_NAME.replace(".fuse", ".ll"),
  );

  if (fs.existsSync(IRFile)) {
    fs.unlink(IRFile, (err) => {
      // Corrected this line
      if (err) {
        console.error(err);
      }
    });
  }
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  let src = formData.get("file") as string;
  src = src.concat("\n");
  const fileName = INTEFUSE_TARGET_NAME;

  if (!src) {
    return NextResponse.json(
      { error: "No content was received from endpoint" },
      { status: 400 },
    );
  }

  try {
    const filePath: fs.PathOrFileDescriptor = path.join(
      process.cwd(),
      OUTPUT_DIR,
      fileName,
    );

    fs.writeFile(filePath, src, (err) => {
      console.error(err);
      return NextResponse.json({ error: err }, { status: 400 });
    });

    const command =
      process.env.FUSE_EXECUTABLE_DIR +
      " " +
      filePath +
      " " +
      FUSE_EXECUTABLE_ARGS;

    const comp_res: ProcessResponse = await run_process(command);

    if (comp_res.isErrorCritical) {
      //Even if an error is shown, we still want to show
      //it to the user since it could potentially be(most likely)
      //syntax errors
      return NextResponse.json({
        message: comp_res.msg,
        asm: OUTPUT_LLVM_IR_ERROR_PLACEHOLDER,
        isErrorCritical: true,
      });
    }

    const LLVMIR = readLLVMIR();

    if (comp_res.msg && !comp_res.isErrorCritical) {
      if (LLVMIR) {
        return NextResponse.json({
          message: comp_res.msg,
          asm: LLVMIR,
          isErrorCritical: false,
        });
      }

      //TODO: Reformat this
      return NextResponse.json(
        { error: "Text processing error " },
        { status: 400 },
      );
    } else {
      return NextResponse.json(
        { error: "Text processing error " },
        { status: 400 },
      );
    }
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 400 });
  } finally {
    //delete any generated files
    clean_up();
  }
}
