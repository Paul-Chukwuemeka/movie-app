"use client";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import useFetchPopularSeries from "@/hooks/series/usefetchPopularSeries";
import Card from "@/components/card";

const Popular = () => {
  const { data, loading, error } = useFetchPopularSeries();

  return (
    <div className="w-full overflow-hidden">
      <h1 className="text-left px-4 w-full text-xl font-bold">
        Popular series
      </h1>
      <div className="w-full overflow-y-hidden movies flex gap-4 overflow-x-scroll p-4 py-1 ">
        {!loading
          ? data.map((item, i) => {
              return (
                <Card
                  key={i}
                  title={item.name}
                  image={item.poster_path}
                  id={item.id}
                />
              );
            })
          : Array(10)
              .fill("")
              .map((_, i) => {
                return (
                  <div
                    key={i}
                    className="duration-250 cursor-pointer shrink-0 h-70 w-50"
                  >
                    <Loading />
                  </div>
                );
              })}
      </div>
    </div>
  );
};

export default Popular;
