import { exec, execFile, spawn } from "child_process"
import { NextRequest, NextResponse } from "next/server"



type FuseCode = {
  src: string
}

async function run_process(src: string): Promise<string | Error> {

  return new Promise((resolve, reject) => {

    let output
    exec(src, (error, stdout, stderr) => {
      if (error) {
        reject(Error('Error running ls ', error));
      } else {
        output = stderr || stdout; // Assign first available value (stderr or stdout)

        resolve(output);
      }
    });
  });
}

export async function GET(req: NextRequest, context: { params: FuseCode }) {

  const { src } = context.params;

  try {

    const res = await run_process(src)

    return Response.json({
      message: res
    })

  } catch (err) {
    return Error('Error on /runsrc/[src]') // Experimental until I figure error handling
  }


}
