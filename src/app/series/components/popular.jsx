"use client";
import React, { useEffect, useState } from "react";
import Loading from "../../components/loading";
import useFetchPopularSeries from "@/hooks/series/usefetchPopularSeries";
import Card from "@/app/components/card";

const Popular = () => {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const res = await useFetchPopularSeries();
        console.log(response);
        setResponse(res);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  const baseImageUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL;

  return (
    <div className="w-full overflow-hidden">
      <h1 className="text-left px-4 w-full text-xl font-bold">
        Popular series
      </h1>
      <div className="w-full movies flex gap-4 overflow-x-scroll p-4 py-1 ">
        {response
          ? response.map((item, i) => {
              return (
                  <Card
                  key={i}
                  title={item.name}
                  image={`${baseImageUrl + item.poster_path}`}
                  id={item.id}
                />
              );
            })
          : Array(10)
              .fill("")
              .map((_, i) => {
                return <Loading key={i} />;
              })}
      </div>
    </div>
  );
};

export default Popular;
