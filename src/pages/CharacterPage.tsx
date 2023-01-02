import { getDocs, query, DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { characterViewType } from "../types/types";
import "../common.scss";
import "./CharacterPage.scss";
import CharacterShowComp from "../components/CharacterShowComp";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { bookmarkSlice } from "../redux/module/bookmarkSlice";
export default function CharacterPage() {
  const [dataSwitch, setDataSwitch] = useState<boolean>();
  const [chalist, setChaList] = useState<characterViewType[]>([]);
  const dispatch = useDispatch();
  const show: string = useSelector((state: any) => {
    return state.bookmark.type;
  });
  const showCha: string = useSelector((state: any) => {
    return state.bookmark.name;
  });
  useEffect(() => {
    dispatch(bookmarkSlice.actions.showdef());
    LoadChaList();
  }, []);
  useEffect(() => {
    if (dataSwitch === true) {
    }
  }, [dataSwitch]);
  return (
    <section className="page_wrap">
      <ul className="type_btn_wrap">
        <li className="type_btn">
          <Button onClick={() => dispatch(bookmarkSlice.actions.showdef())}>
            전체
          </Button>
        </li>
        <li className="type_btn">
          <Button onClick={() => dispatch(bookmarkSlice.actions.showman())}>
            남자 NPC
          </Button>
        </li>
        <li className="type_btn">
          <Button onClick={() => dispatch(bookmarkSlice.actions.showgirl())}>
            여자 NPC
          </Button>
        </li>
        <li className="type_btn">
          <Button onClick={() => dispatch(bookmarkSlice.actions.showfav())}>
            즐겨찾기
          </Button>
        </li>
      </ul>
      <div className="inner">{ListView(show)}</div>
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
          gender: data.gender,
        };
        setChaList((character) => [...character, applyData]);
        console.log(applyData);
      });
    });
    setDataSwitch(true);
  }
  function ListView(show: string) {
    if (show === "default") {
      return (
        <div>
          {chalist.map((item, index) => {
            return (
              <CharacterShowComp item={item} index={index} key={item.name} />
            );
          })}
        </div>
      );
    } else if (show === "man") {
      const manChalist = chalist.filter((value) => {
        return value.gender === "남자";
      });
      return (
        <div>
          {manChalist.map((item, index) => {
            return (
              <CharacterShowComp item={item} index={index} key={item.name} />
            );
          })}
        </div>
      );
    } else if (show === "girl") {
      const girlChalist = chalist.filter((value) => {
        return value.gender === "여자";
      });
      return (
        <div>
          {girlChalist.map((item, index) => {
            return (
              <CharacterShowComp item={item} index={index} key={item.name} />
            );
          })}
        </div>
      );
    } else if (show === "favorite") {
      const favChalist = chalist.filter((value) => {
        return showCha.includes(value.name);
      });
      return (
        <div>
          {favChalist.map((item, index) => {
            return (
              <CharacterShowComp item={item} index={index} key={item.name} />
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          {chalist.map((item, index) => {
            return (
              <CharacterShowComp item={item} index={index} key={item.name} />
            );
          })}
        </div>
      );
    }
  }
}
