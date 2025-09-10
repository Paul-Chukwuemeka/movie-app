"use client";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AppContext from "@/contexts/contexts";

const useFetchPopularSeries = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { setLoadValue } = useContext(AppContext);

  useEffect(() => {
    let ignore = false;
    setLoadValue((prev) => prev + 1);
    async function fetchData() {
      try {
        const res = await axios.get("api/tv/popular");
        if (!ignore) setData(res.data.results);
      } catch (error) {
        if (!ignore) setError(error);
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

export default useFetchPopularSeries;
