"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function useFetchPopular() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      try {
        const res = await axios.get("/api/movie/popular");
        if (!ignore) setData(res.data.results);
      } catch (error) {
        if (!error) setError(error);
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

  return { data, loading, error };
}
