"use client";
import AppContext from "@/contexts/contexts";
import { useContext, useEffect, useState, useRef } from "react";
import Image from "next/image";
import useFetchPopular from "@/hooks/movies/useFetchPopularMovies";
import useFetchTrendingMovies from "@/hooks/movies/useFetchTrendingMovies";

import Loading from "./loading";
import { FaPlay } from "react-icons/fa6";
import ActionMovies from "./genres/actionMovies";
import AnimationMovies from "./genres/animationMovies";
import ComedyMovies from "./genres/comedyMovies";
import ScifiMovies from "./genres/sciFi";
import Popular from "./popular";
import Slider from "./slider";
import Link from "next/link";

const Main = () => {
  const {data,loading,error} =  useFetchTrendingMovies();
  

  return (
    <div
      className={` flex-col flex items-center`}
    >

      <Slider trending={data} isTrendingLoading={loading} />
      <Popular />
      <ActionMovies />
      <AnimationMovies />
      <ScifiMovies />
      <ComedyMovies />
    </div>
  );
};

export default Main;
