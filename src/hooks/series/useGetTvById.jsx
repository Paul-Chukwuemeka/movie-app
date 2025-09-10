import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AppContext from "@/contexts/contexts";

const useGetTvById = (id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { setLoadValue } = useContext(AppContext);

  useEffect(() => {
    let ignore = false;
    setLoadValue((prev) => prev + 1);
    async function fetchData() {
      try {
        const res = await axios.get("/api/tv/getbyid", {
          params: {
            id: id,
          },
        });
        setData(res.data);
      } catch (error) {
        console.log("error");
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

export default useGetTvById;
