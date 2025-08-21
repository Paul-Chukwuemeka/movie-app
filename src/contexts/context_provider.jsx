"use client";

import { useState } from "react";
import AppContext from "./contexts";

const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [movieId, setMovieId] = useState(null);
  const [seriesId, setSeriesId] = useState(null);
  const [currentPage,setCurrentPage] = useState("")
  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        seriesId,
        movieId,
        setMovieId,
        setSeriesId,
        currentPage,
        setCurrentPage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
