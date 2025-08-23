"use client";
import axios from "axios";
import { useState, useEffect } from "react";

const useGetMoviesByGenre = (id) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        if (!ignore) setLoading(false);
      }
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  return { data, error, loading };
};

export default useGetMoviesByGenre;
