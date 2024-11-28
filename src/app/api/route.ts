import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json("hello from server");
};
export const POST = async () => {
  return NextResponse.json("hello from server");
};
