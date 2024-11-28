import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ message: "hello from blog api" });
};
export const POST = async (request: Request) => {
  return NextResponse.json({ message: "hello from blog api" });
};
export const DELETE = async (request: Request) => {
  return NextResponse.json({ message: "hello from blog api" });
};
export const PUT = async (request: Request) => {
  return NextResponse.json({ message: "hello from blog api" });
};
export const PATCH = async (request: Request) => {
  return NextResponse.json({ message: "hello from blog api" });
};
