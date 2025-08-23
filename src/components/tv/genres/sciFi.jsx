import React, { useEffect, useState } from "react";
import useGetSeriesByGenre from "@/hooks/series/useGetSeriesByGenre";
import Loading from "@/components/loading";
import Card from "@/components/card";

const ScifiSeries = () => {
  const {data,loading,error} = useGetSeriesByGenre(10765);


  return (
    <div className="w-full overflow-hidden">
      <h1 className="text-left w-full px-4 py-2 text-3xl font-bold">Sci-fi</h1>
      <div className="w-full overflow-y-hidden movies flex gap-4 overflow-x-scroll p-4 py-1 ">
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
          : data &&
            data.map((item, i) => {
              return (
                <Card
                  key={i}
                  title={item.name}
                  image={item.poster_path}
                  id={item.id}
                />
              );
            })}
      </div>
    </div>
  );
};

export default ScifiSeries;
