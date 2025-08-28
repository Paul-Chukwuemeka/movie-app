import tmdb from "@/app/api/tmdb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await tmdb.get("/trending/movie/day");
    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json({
      message: "Error fetching Data",
    },{status: 500});
  }
}
