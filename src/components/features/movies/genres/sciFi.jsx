import React, { useEffect, useState } from "react";
import useGetMoviesByGenre from "@/hooks/movies/useGetMoviesByGenre";
import Card from "@/components/ui/card";


const ScifiMovies = () => {
  const {data,error} =  useGetMoviesByGenre(878);

  return (
    <div className="w-full overflow-hidden">
      <h1 className="text-left w-full px-4 py-2 text-3xl font-bold">Sci-fi</h1>
      <div className="w-full movies overflow-y-hidden flex gap-4 overflow-x-scroll p-4 py-1 ">
        {data &&
            data.map((item, i) => {
              return (
                <Card
                  key={i}
                  title={item.title}
                  image={item.poster_path}
                  id={item.id}
                />
              );
            })}
      </div>
    </div>
  );
};

export default ScifiMovies;
