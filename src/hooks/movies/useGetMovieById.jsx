import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AppContext from "@/contexts/contexts";

const useGetMovieById = (id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { setLoadValue } = useContext(AppContext);

  useEffect(() => {
    setLoadValue((prev) => prev + 1);
    let ignore = false;
    async function fetchData() {
      try {
        const res = await axios.get("api/movie/getbyid", {
          params: {
            id: id,
          },
        });
        setData(res.data);
      } catch (error) {
        if (!ignore) setError(error);
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
};

export default useGetMovieById;
