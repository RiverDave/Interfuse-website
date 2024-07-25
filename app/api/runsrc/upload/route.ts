import { exec } from "child_process"
import fs from "fs";
import { NextRequest, NextResponse } from "next/server"
import path from "path";
import { INTEFUSE_FILE_NAME, OUTPUT_DIR } from '../../../constants/constants'

//We'll run the compiler from here
async function run_process(src: string): Promise<string | Error> {

  return new Promise((resolve, reject) => {


    //Runs fuse in new shell, resolves on success returning its output, rejects on compiler
    //error or bad error code
    exec(src, (error, stdout, stderr) => {
      const err = error //stderr should also be shown as an exception
      if (err) {
        console.error(err)
        reject(err);
      } else {
        const output = stderr || stdout; 

        resolve(output);
      }
    });
  });
}

export async function POST(req: NextRequest) {

  const formData = await req.formData()
  let src = formData.get('file') as string
  src = src.concat('\n')
  const fileName = INTEFUSE_FILE_NAME

  if (!src) {
    return NextResponse.json({ error: "No content was recieved from endpoint" }, { status: 400 })
  }

  try {

    const filePath: fs.PathOrFileDescriptor = path.join(process.cwd(), OUTPUT_DIR, fileName)

    //Create or override file with the text we've just received
    fs.writeFile(
      filePath,
      src as string,
      (err) => {
        console.error(err)
        return NextResponse.json({ error: err }, { status: 400 })
      }
    )


    //check that file exists
    if (fs.existsSync(filePath)) {

      const command = process.env.FUSE_EXECUTABLE_DIR + ' ' + filePath
      const res = await run_process(command)

      if (res) {
        return NextResponse.json({
          message: res
        })

      }

    }

    return NextResponse.json({ error: "Text processing error" }, { status: 400 })


  } catch (err) {
    return NextResponse.json({ error: err }, { status: 400 });
  }


}
