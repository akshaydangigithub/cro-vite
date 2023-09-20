import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage"
import AboutCro from "./components/about/aboutCro";
import AboutConsumer from "./components/about/AboutConsumer";
import BillLekeDekho from "./components/movement/BillLekeDekho";
import EducationSystem from "./components/movement/EducationSystem";
import FoodAdult from "./components/movement/FoodAdult";
import NationalInte from "./components/movement/NationalInte";
import Committee from "./components/committee/Committee";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about/aboutcro" element={<AboutCro />} />
      <Route path="/about/aboutconsumer" element={<AboutConsumer />} />
      <Route path="/movement/billlekedekho" element={<BillLekeDekho />} />
      <Route path="/movement/educationSys" element={<EducationSystem />} />
      <Route path="/movement/foodAdult" element={<FoodAdult />} />
      <Route path="/movement/nationalInte" element={<NationalInte />} />
      <Route path="/committee" element={<Committee />} />
    </Routes>
  );
};

export default App;
