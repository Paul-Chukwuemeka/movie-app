"use client";
import React, { useEffect } from "react";
import Header from "@/components/layout/header";
import Main from "@/components/features/tv/main";
import Footer from "@/components/layout/footer";
import AppContext from "@/contexts/contexts";
import { useContext } from "react";

const Page = () => {
  const { setCurrentPage, loadValue } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage("series");
  }, []);

  useEffect(() => {
    console.log(loadValue);
  }, [loadValue]);

  return (
    <div className={`flex flex-col h-fit min-h-screen `}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Page;
