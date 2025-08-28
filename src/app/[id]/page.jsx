"use client";
import { useContext, useEffect } from "react";
import AppContext from "@/contexts/contexts";
import { useRouter } from "next/navigation";
import useGetMovieById from "@/hooks/movies/useGetMovieById";
const Page = () => {
  const { movieId } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (!movieId) {
      router.push("/");
    }
  }, []);
  const { data, loading, error } = useGetMovieById(movieId);

  
  return <div> Movie Page for {data && data.original_title}</div>;
};

export default Page;
