import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
function Home() {
  return (
    <>
      <Header />
        <Navbar upperMargin = '111' />
      <Hero />
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
