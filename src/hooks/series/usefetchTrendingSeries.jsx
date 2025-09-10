"use client";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AppContext from "@/contexts/contexts";
import axios from "axios";

const useFetchTrendingSeries = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { setLoadValue } = useContext(AppContext);

  useEffect(() => {
    let ignore = false;
    setLoadValue((prev) => prev + 1);
    async function fetchData() {
      try {
        const res = await axios.get("api/tv/trending");
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

export default useFetchTrendingSeries;
