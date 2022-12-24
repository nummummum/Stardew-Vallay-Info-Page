import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { firestore } from "./firebase";
import "firebase/firestore";
import { collection, DocumentData, getDocs, query } from "firebase/firestore";
import { vegetable } from "./types/types";
import addCharacterInfo from "./functions/addCharacterInfo";
import CropComp from "./components/CropComp";
import FishComp from "./components/FishComp";
import PlantComp from "./components/PlantComp";
import MainPage from "./pages/MainPage";

// const q = query(collection(firestore, "Resource/Bundle/CraftRoom"));

const q2 = query(
  firestore
    .collection("Resource/Object/Plant")
    .where("purpose", "array-contains", "봄 채집 꾸러미")
);
getDocs(q2).then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    let data: DocumentData = doc.data();
    console.log(data);
  });
});

// getDocs(q).then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     let data: DocumentData = doc.data();
//     console.log(data);
//   });
// });

function App() {
  return <MainPage />;
}

export default App;
