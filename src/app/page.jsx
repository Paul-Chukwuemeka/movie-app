"use client";

import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import AppContext from "@/contexts/contexts";
import { useContext, useEffect } from "react";

const Page = () => {
  const { setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage("movies");
  }, []);

  return (
    <div className={`flex flex-col h-fit min-h-screen `}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Page;
