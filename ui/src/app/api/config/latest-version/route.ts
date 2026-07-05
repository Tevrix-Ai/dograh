import { NextResponse } from "next/server";

// Whitelabel: never advertise upstream Dograh releases — this deployment
// ships its own Tevrix AI image, so the "update available" nudge is
// meaningless here. Always report "no newer version".
export async function GET() {
  return NextResponse.json({ latest: null }, { status: 200 });
}
