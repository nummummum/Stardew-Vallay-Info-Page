import { getDocs, query, DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { characterViewType } from "../types/types";
import "../common.scss";
import "./CharacterPage.scss";
import CharacterShowComp from "../components/CharacterShowComp";
export default function CharacterPage() {
  const [dataSwitch, setDataSwitch] = useState<boolean>();
  const [chalist, setChaList] = useState<characterViewType[]>([]);
  useEffect(() => {
    LoadChaList();
  }, []);
  useEffect(() => {
    if (dataSwitch === true) {
    }
  }, [dataSwitch]);
  return (
    <section className="page_wrap">
      <div className="inner">{ListView()}</div>
    </section>
  );
  function LoadChaList() {
    const imgSrc: string = "images/Character/";
    const q = query(firestore.collection("Resource/Character/Citizen"));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        const applyData: characterViewType = {
          name: data.name,
          marry: data.marry,
          portrait: imgSrc + data.portrait,
          schedule: data.schedule,
          favorite: data.favorite,
          event: data.event,
          birth: data.birth,
        };
        setChaList((character) => [...character, applyData]);
        console.log(applyData);
      });
    });
    setDataSwitch(true);
  }
  function ListView() {
    return (
      <div>
        {chalist.map((item, index) => {
          return <CharacterShowComp item={item} index={index} />;
        })}
      </div>
    );
  }
}
