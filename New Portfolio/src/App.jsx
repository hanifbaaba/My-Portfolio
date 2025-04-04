import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Home />
      <Footer />
    </>
  );
}
