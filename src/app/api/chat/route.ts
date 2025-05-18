import { NextResponse } from "next/server";

export function GET() {
  try {
    return NextResponse.json("Here is the chat", { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message, { status: 500 });
    }
  }
}
