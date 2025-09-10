"use client";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AppContext from "@/contexts/contexts";

const useGetMoviesByGenre = (id) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { setLoadValue } = useContext(AppContext);

  useEffect(() => {
    setLoadValue((prev) => prev + 1);
    let ignore = false;
    async function fetchData() {
      try {
        const res = await axios.get("/api/movie/genre", {
          params: {
            id: id,
          },
        });
        if (!ignore) setData(res.data.results);
      } catch (error) {
        if (!ignore) setError(`Error fetching movies by genre:$`, error);
        return [];
      } finally {
        if (!ignore) setLoadValue((prev) => prev - 1);
      }
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  return { data, error };
};

export default useGetMoviesByGenre;
