import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner";
import TechnologySection from "./components/TechnologySection/TechnologySection";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <TechnologySection />
      <ToastContainer />
    </>
  );
}

export default App;
