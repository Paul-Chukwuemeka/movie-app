"use client";
import useFetchTrendingMovies from "@/hooks/movies/useFetchTrendingMovies";
import ActionMovies from "../features/movies/genres/actionMovies";
import AnimationMovies from "../features/movies/genres/animationMovies";
import ComedyMovies from "../features/movies/genres/comedyMovies";
import ScifiMovies from "../features/movies/genres/sciFi";
import Popular from "../features/movies/popular";
import Slider from "../features/slider";

const Main = () => {
  const {data,error} =  useFetchTrendingMovies();
  

  return (
    <div
      className={` flex-col flex items-center`}
    >
      <Slider trending={data}  />
      <Popular />
      <ActionMovies />
      <AnimationMovies />
      <ScifiMovies />
      <ComedyMovies />
    </div>
  );
};

export default Main;
