import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner";
import TechnologySection from "./components/TechnologySection/TechnologySection";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <TechnologySection />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
