import { NextResponse } from "next/server";
import tmdb from "../../tmdb";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
    try {
    const res = await tmdb.get(`/movie/${id}`);
    return NextResponse.json(res.data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
