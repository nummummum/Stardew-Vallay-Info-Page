import { firestore } from "../firebase";
import "firebase/firestore";
import { collection, DocumentData, getDocs, query } from "firebase/firestore";

export default function addHarvestInfo() {
  const q = query(collection(firestore, "Resource/Object/Harvest"));
  const fbCharacter = firestore.collection("Resource/Object/Harvest");
  fbCharacter.doc("Cauliflower").set({
    Name: "콜리플라워",
    Portrait: "Cauliflower.png",
    season: "봄",
    sellprice: 195,
    buypricec: 80,
    obtainday: [12],
    healing: [75, 33],
    purpose: {},
  });
  getDocs(q).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      let data: DocumentData = doc.data();
      console.log(data);
    });
  });
}
