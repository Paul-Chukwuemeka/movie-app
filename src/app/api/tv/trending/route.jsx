import tmdb from "@/app/api/tmdb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await tmdb.get("/trending/tv/day");
    console.log(res);
    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching Popular",
      },
      { status: 500 }
    );
  }
}
