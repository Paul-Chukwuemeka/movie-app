import tmdb from "../../tmdb";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      {
        message: "Genre Id is required",
      },
      { status: 400 }
    );
  }
  try {
    const res = await tmdb.get("/discover/tv", {
      params: {
        with_genres: id,
      },
    });
    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json({
      message: `Error get series by genre ${id}`,
      code: 500,
    });
  }
}
