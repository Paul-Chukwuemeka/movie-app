"use client";
import AppContext from "@/contexts/contexts";
import { useContext, useEffect, useState, useRef } from "react";
import useFetchTrendingSeries from "@/hooks/series/usefetchTrendingSeries";
import Slider from "../../components/slider";
import Link from "next/link";
import Popular from "./popular";
import ActionSeries from "./genres/actionSeries";
import AnimationSeries from "./genres/animationSeries";
import ComedySeries from "./genres/comedySeries";
import ScifiSeries from "./genres/sci_fi";

const Main = () => {
  const { darkMode } = useContext(AppContext);
  const [trending, setTrending] = useState([]);
  const [isTrendingLoading, setIsTrendingLoading] = useState(true);

  const baseImageUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL;

  useEffect(() => {
    async function getTrending() {
      setIsTrendingLoading(true);
      const response = await useFetchTrendingSeries();
      let value = [...response, response[0]];
      setTrending(value);
      setIsTrendingLoading(false);
    }

    getTrending();
  }, []);

  return (
    <div
      className={`flex-1 gap-4 ${
        darkMode ? "text-white" : "text-gray-900"
      }   flex-col flex items-center`}
    >
      <Slider trending={trending} isTrendingLoading={isTrendingLoading} />
      <Popular/>
      <ActionSeries/>
      <AnimationSeries/>
      <ComedySeries/>
      <ScifiSeries/>
    </div>
  );
};

export default Main;
