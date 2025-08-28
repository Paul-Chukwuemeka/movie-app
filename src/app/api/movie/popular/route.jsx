import tmdb from "@/app/api/tmdb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await tmdb.get("/movie/popular");
    return NextResponse.json(res.data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching Popular",
      },
      { status: 500 }
    );
  }
}
