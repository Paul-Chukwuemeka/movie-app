"use client";
import tmdb from "@/api/tmdb";

export default async function useFetchPopularSeries() {
  try {
    const res = await tmdb.get("/tv/popular");
    return res.data.results;
  } catch (error) {
    return error;
  }
}
