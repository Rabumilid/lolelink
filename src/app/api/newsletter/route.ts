import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    // Placeholder: persist or forward to ESP here
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}


