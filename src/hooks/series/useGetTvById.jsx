import { useState, useEffect } from "react";
import axios from "axios";

const useGetTvById = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      try {
        const res = await axios.get("api/tv/getbyid", {
          params: {
            id: id,
          },
        });
        setData(res.data);
      } catch (error) {
        if (!ignore) setError(error);
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
};

export default useGetTvById;
