"use client";
import AppContext from "@/contexts/contexts";
import { useContext, useEffect, useState, useRef } from "react";
import useFetchTrendingSeries from "@/hooks/series/usefetchTrendingSeries";
import Slider from "../slider";
import Popular from "./popular";
import ActionSeries from "./genres/actionSeries";
import AnimationSeries from "./genres/animationSeries";
import ComedySeries from "./genres/comedySeries";
import ScifiSeries from "./genres/sciFi";

const Main = () => {
  const { data, loading, error } = useFetchTrendingSeries();

  return (
    <div className={`flex-1 gap-4 flex-col flex items-center`}>
      <Slider trending={data} isTrendingLoading={loading} />
      <Popular />
      <ActionSeries />
      <AnimationSeries />
      <ComedySeries />
      <ScifiSeries />
    </div>
  );
};

export default Main;
