import { PathOrFileDescriptor, readFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

//TODO: Make this reusable For fun
const loadMarkDown = (): string | null => {
  const filePath: PathOrFileDescriptor = path.join(
    process.cwd(),
    String("public/" + "README.md"),
  );

  const text = readFileSync(filePath, {
    encoding: "utf8",
  });

  return text ? text : null;
};

export async function GET(req: NextRequest) {
  try {
    const text = loadMarkDown();
    if (text) {
      return NextResponse.json({
        data: text,
        status: 200,
      });
    } else {
      return NextResponse.json(
        { error: "Text processing error " },
        { status: 400 },
      );
    }
  } catch (err: any) {
    console.log(err);
  }
}
