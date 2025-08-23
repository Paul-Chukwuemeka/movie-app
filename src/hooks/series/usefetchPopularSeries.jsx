"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const useFetchPopularSeries = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      try {
        const res = await axios.get("api/tv/popular");
        if (!ignore) setData(res.data.results);
      } catch (error) {
        if (!ignore) setError(error);
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

export default useFetchPopularSeries;
