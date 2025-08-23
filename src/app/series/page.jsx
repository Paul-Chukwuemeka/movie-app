"use client";
import React, { useEffect } from "react";
import Header from "../../components/header";
import Main from "../../components/tv/main";
import Footer from "../../components/footer";
import AppContext from "@/contexts/contexts";
import { useContext } from "react";

const Page = () => {
  const { setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage("series");
  }, []);
  return (
    <div
      className={`flex flex-col h-fit min-h-screen `}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Page;
