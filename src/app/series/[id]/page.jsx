"use client";
import { useContext, useEffect } from "react";
import AppContext from "@/contexts/contexts";
import { useRouter } from "next/navigation";
import useGetTvById from "@/hooks/movies/useGetMovieById";
const Page = () => {
  const { seriesId } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (!seriesId) {
      router.push("/series");
    }
  }, []);

  return <div> Series Page</div>;
};

export default Page;
