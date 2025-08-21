import React, { useEffect, useState } from "react";
import useGetSeriesByGenre from "@/hooks/series/useGetSeriesByGenre";
import Card from "@/app/components/card";
import Loading from "@/app/components/loading";

const AnimationSeries = () => {
  const baseImageUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL;

  const [actionList, setActionList] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    async function getRes() {
      try {
        const res = await useGetSeriesByGenre(16);
        setActionList(res);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    getRes();
  }, []);
  return (
    <div className="w-full overflow-hidden">
      <h1 className="text-left w-full px-4 py-2 text-3xl font-bold">Animation</h1>
      <div className="w-full movies flex gap-4 overflow-x-scroll p-4 py-1 ">
        {loading
          ? Array(10)
              .fill("")
              .map((_, i) => {
                return (
                  <div key={i}>
                    <Loading />
                  </div>
                );
              })
          : actionList &&
            actionList.map((item, i) => {
              return (
                <Card
                  key={i}
                  title={item.name}
                  image={`${baseImageUrl + item.poster_path}`}
                  id={item.id}
                />
              );
            })}
      </div>
    </div>
  );
};

export default AnimationSeries;
