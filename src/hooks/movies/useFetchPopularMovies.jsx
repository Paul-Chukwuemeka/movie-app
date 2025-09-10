"use client";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AppContext from "@/contexts/contexts";

export default function useFetchPopular() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { setLoadValue } = useContext(AppContext);

  useEffect(() => {
    setLoadValue((prev) => prev + 1);
    let ignore = false;
    async function fetchData() {
      try {
        const res = await axios.get("/api/movie/popular");
        if (!ignore) setData(res.data.results);
      } catch (error) {
        if (!error) setError(error);
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

  return { data, error };
}
