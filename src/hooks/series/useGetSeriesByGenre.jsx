"use client";
import AppContext from "@/contexts/contexts";
import axios from "axios";
import { useState, useEffect, useContext } from "react";

const useGetSeriesByGenre = (id) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { setLoadValue } = useContext(AppContext);

  useEffect(() => {
    let ignore = false;
    setLoadValue((prev) => prev + 1);
    async function fetchData() {
      try {
        const res = await axios.get("/api/tv/genre", {
          params: {
            id: id,
          },
        });
        if (!ignore) setData(res.data.results);
      } catch (error) {
        if (!ignore) setError(`Error fetching tvs by genre:$`, error);
        return [];
      } finally {
        if (!ignore) setLoadValue((prev) => prev - 1);
      }
    }

    fetchData();
    return () => {
      ignore = true;
      setLoadValue(0);
    };
  }, []);

  return { data, error};
};

export default useGetSeriesByGenre;
