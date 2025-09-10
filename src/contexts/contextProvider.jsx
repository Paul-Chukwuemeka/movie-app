"use client";

import { useEffect, useState } from "react";
import AppContext from "./contexts";

const ContextProvider = ({ children }) => {
  const [movieId, setMovieId] = useState(null);
  const [seriesId, setSeriesId] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [loadValue, setLoadValue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loadValue != null && loadValue > 0) {
      setLoading(true);
    } else if (loadValue == 0) {
      setLoading(false);
    }
  }, [loadValue]);

  return (
    <AppContext.Provider
      value={{
        seriesId,
        movieId,
        setMovieId,
        setSeriesId,
        currentPage,
        setCurrentPage,
        loading,
        setLoading,
        loadValue,
        setLoadValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
