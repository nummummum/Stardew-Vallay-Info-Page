import { Space, Button, Radio, RadioChangeEvent } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../common.scss";
import "./ItemShowComp.scss";
import { useEffect, useRef, useState } from "react";
import { firestore } from "../firebase";
import { collection, DocumentData, getDocs, query } from "firebase/firestore";
import {
  FoodType,
  HarvestType,
  MineralType,
  PlantType,
  ProductType,
  bundleViewType,
} from "../types/types";
import { Content, Header } from "antd/lib/layout/layout";
export default function ItemShowComp() {
  const [fishdata, setFishData] = useState<FishType[]>([]);
  const [fooddata, setFoodData] = useState<FoodType[]>([]);
  const [harvestdata, setHarvestData] = useState<HarvestType[]>([]);
  const [mineraldata, setMineralData] = useState<MineralType[]>([]);
  const [plantdata, setPlantData] = useState<PlantType[]>([]);
  const [productdata, setProductData] = useState<ProductType[]>([]);

  const [everyFishdata, setEveryFishData] = useState<FishType[]>([]);
  const [springFishdata, setSpringFishData] = useState<FishType[]>([]);
  const [summerFishdata, setSummerFishData] = useState<FishType[]>([]);
  const [fallFishdata, setFallFishData] = useState<FishType[]>([]);
  const [winterFishdata, setWinterFishData] = useState<FishType[]>([]);
  const [etcFishdata, setEtcFishData] = useState<FishType[]>([]);
  const [islandFishdata, setIslandFishData] = useState<FishType[]>([]);

  const [everyHarvestdata, setEveryHarvestData] = useState<HarvestType[]>([]);
  const [springHarvestdata, setSpringHarvestData] = useState<HarvestType[]>([]);
  const [summerHarvestdata, setSummerHarvestData] = useState<HarvestType[]>([]);
  const [fallHarvestdata, setFallHarvestData] = useState<HarvestType[]>([]);
  const [winterHarvestdata, setWinterHarvestData] = useState<HarvestType[]>([]);

  const [everyPlantdata, setEveryPlantData] = useState<PlantType[]>([]);
  const [springPlantdata, setSpringPlantData] = useState<PlantType[]>([]);
  const [summerPlantdata, setSummerPlantData] = useState<PlantType[]>([]);
  const [fallPlantdata, setFallPlantData] = useState<PlantType[]>([]);
  const [winterPlantdata, setWinterPlantData] = useState<PlantType[]>([]);

  const fishRef = useRef<HTMLDivElement>(null);
  const foodRef = useRef<HTMLDivElement>(null);
  const mineralRef = useRef<HTMLDivElement>(null);
  const harvestRef = useRef<HTMLDivElement>(null);
  const plantRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  const [itemValue, setItemValue] = useState(1);
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
    getItem();
    harvestRef.current!.style.display = "block";
  }, []);
  return (
    <div>
      <Header className="show_item_header">
        <Radio.Group onChange={(e) => ItemTab(e)} value={itemValue}>
          <Radio value={1}>농사</Radio>
          <Radio value={2}>채집</Radio>
          <Radio value={3}>낚시</Radio>
          <Radio value={4}>채광</Radio>
          <Radio value={5}>가공품</Radio>
          <Radio value={6}>음식</Radio>
        </Radio.Group>
      </Header>
      <Content>
        <div ref={harvestRef} className="admin_div">
          모든 계절
          {HarvestSort(everyHarvestdata)}봄{HarvestSort(springHarvestdata)}
          여름
          {HarvestSort(summerHarvestdata)}
          가을
          {HarvestSort(fallHarvestdata)}
          겨울
          {HarvestSort(winterHarvestdata)}
        </div>
        <div ref={plantRef} className="admin_div">
          모든 계절
          {PlantSort(everyPlantdata)}봄{PlantSort(springPlantdata)}
          여름
          {PlantSort(summerPlantdata)}
          가을
          {PlantSort(fallPlantdata)}
          겨울
          {PlantSort(winterPlantdata)}
        </div>
        <div ref={fishRef} className="admin_div">
          모든 계절
          {FishSort(everyFishdata)}봄{FishSort(springFishdata)}
          여름
          {FishSort(summerFishdata)}
          가을
          {FishSort(fallFishdata)}
          겨울
          {FishSort(winterFishdata)}
          진저섬,야시장
          {FishSort(islandFishdata)}
          통발
          <div>
            <div className="detail_title">
              <h4 className="detail_img"></h4>
              <h4 className="detail_name">이름</h4>
              <h4 className="detail_location">위치</h4>
            </div>
            {etcFishdata.map((item, index) => {
              return (
                <div className="detail">
                  <img src={item.portrait} className="detail_img" />
                  <h4 className="detail_name">{item.name}</h4>
                  <h4 className="detail_location">{item.location}</h4>
                </div>
              );
            })}
          </div>
        </div>
        <div ref={mineralRef} className="admin_div">
          {MineralSort(mineraldata)}
        </div>
        <div ref={productRef} className="admin_div">
          {ProductSort(productdata)}
        </div>
        <div ref={foodRef} className="admin_div">
          {FoodSort(fooddata)}
        </div>
      </Content>
    </div>
  );
  function getItem() {
    const qFish = query(firestore.collection("Resource/Object/Fish"));
    const qFood = query(firestore.collection("Resource/Object/Food"));
    const qHarvest = query(firestore.collection("Resource/Object/Harvest"));
    const qMineral = query(firestore.collection("Resource/Object/Mineral"));
    const qPlant = query(firestore.collection("Resource/Object/Plant"));
    const qProduct = query(firestore.collection("Resource/Object/Product"));

    getDocs(qFish).then((querySnapshot) => {
      const Fish = "images/Fish/";
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
        if (pushdata.season === "항상") {
          if (pushdata.location.includes("게잡이")) {
            setEtcFishData((bundle) => [...bundle, pushdata]);
          } else if (
            pushdata.location.includes("야시장") ||
            pushdata.location.includes("진저섬")
          ) {
            setIslandFishData((bundle) => [...bundle, pushdata]);
          } else setEveryFishData((bundle) => [...bundle, pushdata]);
        }
        if (pushdata.season.includes("봄")) {
          setSpringFishData((bundle) => [...bundle, pushdata]);
        }
        if (pushdata.season.includes("여름")) {
          setSummerFishData((bundle) => [...bundle, pushdata]);
        }
        if (pushdata.season.includes("가을")) {
          setFallFishData((bundle) => [...bundle, pushdata]);
        }
        if (pushdata.season.includes("겨울")) {
          setWinterFishData((bundle) => [...bundle, pushdata]);
        }
        setFishData((bundle) => [...bundle, pushdata]);
      });
    });
    getDocs(qFood).then((querySnapshot) => {
      const Food = "images/Food/";
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: FoodType = {
          name: data.name,
          portrait: Food + data.portrait,
          purpose: data.purpose,
          sellprice: data.sellprice,
          ingredient: data.ingredient,
          healing: data.healing,
          explain: data.explain,
        };
        setFoodData((bundle) => [...bundle, pushdata]);
      });
    });
    getDocs(qHarvest).then((querySnapshot) => {
      const Harvest = "images/Harvest/";
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: HarvestType = {
          name: data.name,
          portrait: Harvest + data.portrait,
          season: data.season,
          sellprice: data.sellprice,
          purpose: data.purpose,
          buypricec: data.buypricec,
          detail: data.detail,
          healing: data.healing,
          explain: data.explain,
          obtainday: data.obtainday,
        };
        if (pushdata.season === "항상") {
          setEveryHarvestData((bundle) => [...bundle, pushdata]);
        }
        if (pushdata.season.includes("봄")) {
          setSpringHarvestData((bundle) => [...bundle, pushdata]);
        }
        if (pushdata.season.includes("여름")) {
          setSummerHarvestData((bundle) => [...bundle, pushdata]);
        }
        if (pushdata.season.includes("가을")) {
          setFallHarvestData((bundle) => [...bundle, pushdata]);
        }
        if (pushdata.season.includes("겨울")) {
          setWinterHarvestData((bundle) => [...bundle, pushdata]);
        }
        setHarvestData((bundle) => [...bundle, pushdata]);
      });
    });
    getDocs(qMineral).then((querySnapshot) => {
      const Mineral = "images/Mineral/";
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: MineralType = {
          name: data.name,
          portrait: Mineral + data.portrait,
          purpose: data.purpose,
          sellprice: data.sellprice,
          explain: data.explain,
        };
        setMineralData((bundle) => [...bundle, pushdata]);
      });
    });
    getDocs(qPlant).then((querySnapshot) => {
      const Plant = "images/Plant/";
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: PlantType = {
          name: data.name,
          portrait: Plant + data.portrait,
          season: data.season,
          purpose: data.purpose,
          explain: data.explain,
        };
        if (pushdata.season === "항상") {
          setEveryPlantData((bundle) => [...bundle, pushdata]);
        }
        if (pushdata.season.includes("봄")) {
          setSpringPlantData((bundle) => [...bundle, pushdata]);
        }
        if (pushdata.season.includes("여름")) {
          setSummerPlantData((bundle) => [...bundle, pushdata]);
        }
        if (pushdata.season.includes("가을")) {
          setFallPlantData((bundle) => [...bundle, pushdata]);
        }
        if (pushdata.season.includes("겨울")) {
          setWinterPlantData((bundle) => [...bundle, pushdata]);
        }
        setPlantData((bundle) => [...bundle, pushdata]);
      });
    });
    getDocs(qProduct).then((querySnapshot) => {
      const Product = "images/Product/";
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: ProductType = {
          name: data.name,
          portrait: Product + data.portrait,
          purpose: data.purpose,
          sellprice: data.sellprice,
          explain: data.explain,
          healing: data.healing,
        };
        setProductData((bundle) => [...bundle, pushdata]);
      });
    });
  }
  function FishSort(data: FishType[]) {
    return (
      <div className="detail_wrap">
        <div className="show_detail_title">
          <h4 className="detail_img"></h4>
          <h4 className="detail_name">이름</h4>
          <h4 className="detail_season">계절</h4>
          <h4 className="detail_location">위치</h4>
          <h4 className="detail_time">시간</h4>
          <h4 className="detail_weather">날씨</h4>
          <h4 className="detail_purpose">용도</h4>
        </div>
        {data.map((item, index) => {
          return (
            <div className="detail" key={item.name}>
              <img src={item.portrait} className="detail_img" />
              <h4 className="detail_name">{item.name}</h4>
              <h4 className="detail_season">{item.season}</h4>
              <h4 className="detail_location">{item.location}</h4>
              <h4 className="detail_time">{item.time}</h4>
              <h4 className="detail_weather">{item.weather}</h4>
              {findFishBundle(item.purpose)}
            </div>
          );
        })}
      </div>
    );
  }
  function FoodSort(data: FoodType[]) {
    return (
      <div className="detail_wrap">
        <div className="show_detail_title">
          <h4 className="detail_img"></h4>
          <h4 className="detail_name">이름</h4>
          <h4 className="detail_sellprice">판매가격</h4>
          <h4 className="detail_healing">회복량</h4>
          <h4 className="detail_explain">설명</h4>
          <h4 className="detail_ingredient">재료</h4>
          <h4 className="detail_purpose">용도</h4>
        </div>
        {data.map((item, index) => {
          return (
            <div className="detail" key={item.name}>
              <img src={item.portrait} className="detail_img" />
              <h4 className="detail_name">{item.name}</h4>
              <h4 className="detail_sellprice">{item.sellprice}</h4>
              <h4 className="detail_healing">{item.healing}</h4>
              <h4 className="detail_explain">{item.explain}</h4>
              <h4 className="detail_ingredient">{item.ingredient}</h4>
              {findFoodBundle(item.purpose)}
            </div>
          );
        })}
      </div>
    );
  }
  function HarvestSort(data: HarvestType[]) {
    return (
      <div className="detail_wrap">
        <div className="show_detail_title">
          <h4 className="detail_img"></h4>
          <h4 className="detail_name">이름</h4>
          <h4 className="detail_season">계절</h4>
          <h4 className="detail_buyprice">구매가격</h4>
          <h4 className="detail_sellprice">판매가격</h4>
          <h4 className="detail_obtainday">수확일</h4>
          <h4 className="detail_healing">회복량</h4>
          <h4 className="detail_detail">세부사항</h4>
          <h4 className="detail_explain">설명</h4>
          <h4 className="detail_purpose">용도</h4>
        </div>
        {data.map((item, index) => {
          return (
            <div className="detail" key={item.name}>
              <img src={item.portrait} className="detail_img" />
              <h4 className="detail_name">{item.name}</h4>
              <h4 className="detail_season">{item.season}</h4>
              <h4 className="detail_buyprice">{item.buypricec}</h4>
              <h4 className="detail_sellprice">{item.sellprice}</h4>
              <h4 className="detail_obtainday">{item.obtainday}</h4>
              <h4 className="detail_healing">{item.healing}</h4>
              <h4 className="detail_detail">{item.detail}</h4>
              <h4 className="detail_explain">{item.explain}</h4>
              {findHarvestBundle(item.purpose)}
            </div>
          );
        })}
      </div>
    );
  }
  function MineralSort(data: MineralType[]) {
    return (
      <div className="detail_wrap">
        <div className="show_detail_title">
          <h4 className="detail_img"></h4>
          <h4 className="detail_name">이름</h4>
          <h4 className="detail_sellprice">판매가격</h4>
          <h4 className="detail_explain">설명</h4>
          <h4 className="detail_purpose">용도</h4>
        </div>
        {data.map((item, index) => {
          return (
            <div className="detail" key={item.name}>
              <img src={item.portrait} className="detail_img" />
              <h4 className="detail_name">{item.name}</h4>
              <h4 className="detail_sellprice">{item.sellprice}</h4>
              <h4 className="detail_explain">{item.explain}</h4>
              {findMineralBundle(item.purpose)}
            </div>
          );
        })}
      </div>
    );
  }
  function PlantSort(data: PlantType[]) {
    return (
      <div className="detail_wrap">
        <div className="show_detail_title">
          <h4 className="detail_img"></h4>
          <h4 className="detail_name">이름</h4>
          <h4 className="detail_season">계절</h4>
          <h4 className="detail_explain">설명</h4>
          <h4 className="detail_purpose">용도</h4>
        </div>
        {data.map((item, index) => {
          return (
            <div className="detail" key={item.name}>
              <img src={item.portrait} className="detail_img" />
              <h4 className="detail_name">{item.name}</h4>
              <h4 className="detail_season">{item.season}</h4>
              <h4 className="detail_explain">{item.explain}</h4>
              {findPlantBundle(item.purpose)}
            </div>
          );
        })}
      </div>
    );
  }
  function ProductSort(data: ProductType[]) {
    return (
      <div className="detail_wrap">
        <div className="show_detail_title">
          <h4 className="detail_img"></h4>
          <h4 className="detail_name">이름</h4>
          <h4 className="detail_sellprice">판매가격</h4>
          <h4 className="detail_healing">회복량</h4>
          <h4 className="detail_explain">설명</h4>
          <h4 className="detail_purpose">용도</h4>
        </div>
        {data.map((item, index) => {
          return (
            <div className="detail" key={item.name}>
              <img src={item.portrait} className="detail_img" />
              <h4 className="detail_name">{item.name}</h4>
              <h4 className="detail_sellprice">{item.sellprice}</h4>
              <h4 className="detail_healing">{item.healing}</h4>
              <h4 className="detail_explain">{item.explain}</h4>
              {findProductBundle(item.purpose)}
            </div>
          );
        })}
      </div>
    );
  }
  function findHarvestBundle(bundle: string[]) {
    return (
      <h4 className="detail_purpose">
        {bundle.map((item) => {
          let imgSrc = "";
          switch (item) {
            case "봄 작물 꾸러미": {
              imgSrc = "images/Etc/Bundle_Green.png";
              break;
            }
            case "여름 작물 꾸러미": {
              imgSrc = "images/Etc/Bundle_Yellow.png";
              break;
            }
            case "가을 작물 꾸러미": {
              imgSrc = "images/Etc/Bundle_Orange.png";
              break;
            }
            case "고급 작물 꾸러미": {
              imgSrc = "images/Etc/Bundle_Purple.png";
              break;
            }
            case "요리사 꾸러미": {
              imgSrc = "images/Etc/Bundle_Teal.png";
              break;
            }
            case "염료 꾸러미": {
              imgSrc = "images/Etc/Bundle_Blue.png";
              break;
            }
            case "사료 꾸러미": {
              imgSrc = "images/Etc/Bundle_Red.png";
              break;
            }
            case "잃어버린 꾸러미": {
              imgSrc = "images/Etc/Bundle_Purple.png";
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
  function findPlantBundle(bundle: string[]) {
    return (
      <h4 className="detail_purpose">
        {bundle.map((item) => {
          let imgSrc = "";
          switch (item) {
            case "장인 꾸러미": {
              imgSrc = "images/Etc/Bundle_Green.png";
              break;
            }
            case "사료 꾸러미": {
              imgSrc = "images/Etc/Bundle_Red.png";
              break;
            }
            case "특수 채집 꾸러미": {
              imgSrc = "images/Etc/Bundle_Orange.png";
              break;
            }
            case "게잡이 통발 꾸러미": {
              imgSrc = "images/Etc/Bundle_Purple.png";
              break;
            }
            case "요리사 꾸러미": {
              imgSrc = "images/Etc/Bundle_Teal.png";
              break;
            }
            case "지질학자 꾸러미": {
              imgSrc = "images/Etc/Bundle_Blue.png";
              break;
            }
            case "마법사 꾸러미": {
              imgSrc = "images/Etc/Bundle_Purple.png";
              break;
            }
            case "봄 채집 꾸러미": {
              imgSrc = "images/Etc/Bundle_Green.png";
              break;
            }
            case "여름 채집 꾸러미": {
              imgSrc = "images/Etc/Bundle_Yellow.png";
              break;
            }
            case "가을 채집 꾸러미": {
              imgSrc = "images/Etc/Bundle_Orange.png";
              break;
            }
            case "겨울 채집 꾸러미": {
              imgSrc = "images/Etc/Bundle_Blue.png";
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
  function findMineralBundle(bundle: string[]) {
    return (
      <h4 className="detail_purpose">
        {bundle.map((item) => {
          let imgSrc = "";
          switch (item) {
            case "염료 꾸러미": {
              imgSrc = "images/Etc/Bundle_Green.png";
              break;
            }
            case "현장 연구 꾸러미": {
              imgSrc = "images/Etc/Bundle_Red.png";
              break;
            }
            case "대장장이 꾸러미": {
              imgSrc = "images/Etc/Bundle_Orange.png";
              break;
            }
            case "지질학자 꾸러미": {
              imgSrc = "images/Etc/Bundle_Teal.png";
              break;
            }
            case "모험가 꾸러미": {
              imgSrc = "images/Etc/Bundle_Blue.png";
              break;
            }
            case "잃어버린 꾸러미": {
              imgSrc = "images/Etc/Bundle_Purple.png";
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
  function findProductBundle(bundle: string[]) {
    return (
      <h4 className="detail_purpose">
        {bundle.map((item) => {
          let imgSrc = "";
          switch (item) {
            case "장인 꾸러미": {
              imgSrc = "images/Etc/Bundle_Green.png";
              break;
            }
            case "사료 꾸러미": {
              imgSrc = "images/Etc/Bundle_Red.png";
              break;
            }
            case "동물 꾸러미": {
              imgSrc = "images/Etc/Bundle_Orange.png";
              break;
            }
            case "마법사 꾸러미": {
              imgSrc = "images/Etc/Bundle_blue.png";
              break;
            }
            case "요리사 꾸러미": {
              imgSrc = "images/Etc/Bundle_Teal.png";
              break;
            }
            case "잃어버린 꾸러미": {
              imgSrc = "images/Etc/Bundle_Purple.png";
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
  function findFoodBundle(bundle: string[]) {
    return (
      <h4 className="detail_purpose">
        {bundle.map((item) => {
          let imgSrc = "";
          switch (item) {
            case "요리사 꾸러미": {
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
  function SelectTab(key: number) {
    ClearTab();
    switch (key) {
      case 1: {
        harvestRef.current!.style.display = "block";
        break;
      }
      case 2: {
        plantRef.current!.style.display = "block";
        break;
      }
      case 3: {
        fishRef.current!.style.display = "block";
        break;
      }
      case 4: {
        mineralRef.current!.style.display = "block";
        break;
      }
      case 5: {
        productRef.current!.style.display = "block";
        break;
      }
      case 6: {
        foodRef.current!.style.display = "block";
        break;
      }
    }
  }
  function ClearTab() {
    harvestRef.current!.style.display = "none";
    plantRef.current!.style.display = "none";
    fishRef.current!.style.display = "none";
    mineralRef.current!.style.display = "none";
    productRef.current!.style.display = "none";
    foodRef.current!.style.display = "none";
  }
  function ItemTab(e: RadioChangeEvent) {
    setItemValue(e.target.value);
    SelectTab(e.target.value);
  }
}
