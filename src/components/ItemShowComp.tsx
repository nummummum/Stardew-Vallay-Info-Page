import { Space, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../common.scss";
import "./ItemShowComp.scss";
import { useEffect, useRef, useState } from "react";
import { firestore } from "../firebase";
import { collection, DocumentData, getDocs, query } from "firebase/firestore";
import { bundleViewType } from "../types/types";
export default function ItemShowComp() {
  const [fishdata, setFishData] = useState<FishType[]>([]);
  type FishType = {
    name: string;
    portrait: string;
    season: string;
    sellprice: string;
    purpose: string[];
    location: string;
    time: string;
    weather: string;
  };
  useEffect(() => {
    getFish();
  }, []);
  return (
    <div>
      <div className="fish_detail_title">
        <h4 className="detail_img"></h4>
        <h4 className="detail_name">이름</h4>
        <h4 className="detail_location">위치</h4>
        <h4 className="detail_time">시간</h4>
        <h4 className="detail_weather">날씨</h4>
        <h4 className="detail_purpose">용도</h4>
      </div>
      {fishdata.map((item, index) => {
        return (
          <div className="fish_detail">
            <img src={item.portrait} className="detail_img" />
            <h4 className="detail_name">{item.name}</h4>
            <h4 className="detail_location">{item.location}</h4>
            <h4 className="detail_time">{item.time}</h4>
            <h4 className="detail_weather">{item.weather}</h4>
            {findFishBundle(item.purpose)}
          </div>
        );
      })}
    </div>
  );
  function getFish() {
    const Fish = "images/Fish/";
    const q = query(
      firestore.collection("Resource/Object/Fish")
      // .where("purpose", "array-contains", "봄 채집 꾸러미")
    );
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: FishType = {
          name: data.name,
          portrait: Fish + data.portrait,
          season: data.season,
          sellprice: data.sellprice,
          purpose: data.purpose,
          location: data.location,
          time: data.time,
          weather: data.weather,
        };
        setFishData((bundle) => [...bundle, pushdata]);
      });
    });
  }
  function findFishBundle(bundle: string[]) {
    return (
      <h4 className="detail_purpose">
        {bundle.map((item) => {
          let imgSrc = "";
          switch (item) {
            case "강 물고기 꾸러미": {
              imgSrc = "images/Etc/Bundle_Teal.png";
              break;
            }
            case "호수 물고기 꾸러미": {
              imgSrc = "images/Etc/Bundle_Green.png";
              break;
            }
            case "바다 물고기 꾸러미": {
              imgSrc = "images/Etc/Bundle_Blue.png";
              break;
            }
            case "밤 물고기 꾸러미": {
              imgSrc = "images/Etc/Bundle_Purple.png";
              break;
            }
            case "게잡이 통발 꾸러미": {
              imgSrc = "images/Etc/Bundle_Orange.png";
              break;
            }
            case "현장 연구 꾸러미": {
              imgSrc = "images/Etc/Bundle_Blue.png";
              break;
            }
            case "특수 물고기 꾸러미": {
              imgSrc = "images/Etc/Bundle_red.png";
              break;
            }
            case "잃어버린 꾸러미": {
              imgSrc = "images/Etc/Bundle_Purple.png";
              break;
            }
            case "염료 꾸러미": {
              imgSrc = "images/Etc/Bundle_Teal.png";
              break;
            }
            default:
              return <h4>{item}</h4>;
              break;
          }
          return (
            <div>
              <img src={imgSrc} alt="" className="bundle_img" />
              {item}
            </div>
          );
        })}
      </h4>
    );
  }
}
