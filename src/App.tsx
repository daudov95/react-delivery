import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./assets/styles/App.scss";
import Footer from "./components/Footer";
import Main from "./components/pages/Main";
import Store from "./components/pages/Store";
import NotFound from "./components/pages/NotFound";
import Restaurant from "./components/pages/Restaurant";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/store" element={<Store />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
