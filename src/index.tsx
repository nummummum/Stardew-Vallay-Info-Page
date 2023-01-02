import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BundleItemPage from "./pages/BundleItemPage";
import CharacterPage from "./pages/CharacterPage";
import SkillCookPage from "./pages/SkillCookPage";
import QuestPage from "./pages/QuestPage";
import Header from "./components/Header";
import PlantComp from "./components/PlantComp";
import FishComp from "./components/FishComp";
import ProductComp from "./components/ProductComp";
import MineralComp from "./components/MineralComp";
import FoodComp from "./components/FoodComp";
import CharacterComp from "./components/CharacterComp";
import { Provider } from "react-redux";
import store from "./redux/module/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bundleitem" element={<BundleItemPage />} />
        <Route path="/character" element={<CharacterPage />} />
        <Route path="/skillcook" element={<SkillCookPage />} />
        <Route path="/quest" element={<QuestPage />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
