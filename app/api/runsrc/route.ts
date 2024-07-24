import { NextResponse, NextRequest } from "next/server"

interface params {
  src: String
}

export async function GET(request: Request) {
  return Response.json({
    message: "Hello world"
  })
}

export async function POST(req: NextRequest, context : {params: params}) {

  const data = context.params.src

  const json = {
    data
  }

  return Response.json({
    json
  })

}


