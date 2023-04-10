import { Button, Radio, RadioChangeEvent } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { BaseSyntheticEvent, useEffect, useRef, useState } from "react";
import { firestore } from "../firebase";
import { DocumentData, getDocs, query } from "firebase/firestore";
import {
  FishType,
  FoodType,
  HarvestType,
  MineralType,
  PlantType,
  ProductType,
} from "../types/types";

const inicialHarvest: HarvestType = {
  name: "",
  portrait: "",
  buypricec: "",
  sellprice: "",
  purpose: [],
  season: "",
  detail: "",
  healing: [],
  explain: "",
  obtainday: [],
};
const inicialPlant: PlantType = {
  name: "",
  portrait: "",
  purpose: [],
  season: "",
  explain: "",
};
const inicialFish: FishType = {
  name: "",
  portrait: "",
  season: "",
  sellprice: "",
  purpose: [],
  location: "",
  time: "",
  weather: "",
};
const inicialMineral: MineralType = {
  name: "",
  portrait: "",
  sellprice: "",
  purpose: [],
  explain: "",
};
const inicialProduct: ProductType = {
  name: "",
  portrait: "",
  purpose: [],
  healing: [],
  sellprice: "",
  explain: "",
};
const inicialFood: FoodType = {
  name: "",
  portrait: "",
  sellprice: "",
  purpose: [],
  ingredient: [],
  healing: [],
  explain: "",
};
export default function AdminDeleteItem() {
  const [fishdata, setFishData] = useState<FishType>(inicialFish);
  const [fooddata, setFoodData] = useState<FoodType>(inicialFood);
  const [harvestdata, setHarvestData] = useState<HarvestType>(inicialHarvest);
  const [mineraldata, setMineralData] = useState<MineralType>(inicialMineral);
  const [plantdata, setPlantData] = useState<PlantType>(inicialPlant);
  const [productdata, setProductData] = useState<ProductType>(inicialProduct);

  const [findValue, setFindValue] = useState("");
  const [tabValue, setTabValue] = useState(1);

  const [modifyName, setModifyName] = useState("");
  const [modifyPortrait, setModifyPortrait] = useState("");

  const fishRef = useRef<HTMLDivElement>(null);
  const foodRef = useRef<HTMLDivElement>(null);
  const mineralRef = useRef<HTMLDivElement>(null);
  const harvestRef = useRef<HTMLDivElement>(null);
  const plantRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    harvestRef.current!.style.display = "block";
  }, []);

  return (
    <>
      <Header>
        <Radio.Group onChange={(e) => ItemTab(e)} value={tabValue}>
          <Radio value={1}>농사</Radio>
          <Radio value={2}>채집</Radio>
          <Radio value={3}>낚시</Radio>
          <Radio value={4}>채광</Radio>
          <Radio value={5}>가공품</Radio>
          <Radio value={6}>음식</Radio>
        </Radio.Group>
      </Header>
      <div>
        <input
          type="text"
          value={findValue}
          onChange={(e) => {
            onFindItem(e);
          }}
        />
        <Button onClick={() => onFindDB()}>찾기</Button>
      </div>
      <Content>
        <div ref={harvestRef} className="admin_div">
          {HarvestSort(harvestdata)}
        </div>
        <div ref={plantRef} className="admin_div">
          {PlantSort(plantdata)}
        </div>
        <div ref={fishRef} className="admin_div">
          {FishSort(fishdata)}
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
    </>
  );

  //////////////////////
  // 데이터 sort 부분 //
  //////////////////////
  function FishSort(data: FishType) {
    return (
      <div className="detail_wrap">
        <div className="detail_title">
          <h4 className="detail_english">파일 이름</h4>
          <h4 className="detail_name">이름</h4>
          <h4 className="detail_season">계절</h4>
          <h4 className="detail_location">위치</h4>
          <h4 className="detail_time">시간</h4>
          <h4 className="detail_weather">날씨</h4>
          <h4 className="detail_purpose">용도</h4>
        </div>
        <div className="detail" key={data.name}>
          <h4 className="detail_english">{modifyPortrait}</h4>
          <h4 className="detail_name">{data.name}</h4>
          <h4 className="detail_season">{data.season}</h4>
          <h4 className="detail_location">{data.location}</h4>
          <h4 className="detail_time">{data.time}</h4>
          <h4 className="detail_weather">{data.weather}</h4>
          <h4 className="detail_purpose">{data.purpose}</h4>
        </div>
        <Button onClick={() => onModifyBtn()}>삭제하기</Button>
      </div>
    );
  }
  function FoodSort(data: FoodType) {
    return (
      <div className="detail_wrap">
        <div className="detail_title">
          <h4 className="detail_english">파일 이름</h4>
          <h4 className="detail_name">이름</h4>
          <h4 className="detail_sellprice">판매가격</h4>
          <h4 className="detail_healing">회복량</h4>
          <h4 className="detail_explain">설명</h4>
          <h4 className="detail_ingredient">재료</h4>
          <h4 className="detail_purpose">용도</h4>
        </div>

        <div className="detail" key={data.name}>
          <h4 className="detail_english">{modifyPortrait}</h4>
          <h4 className="detail_name">{data.name}</h4>
          <h4 className="detail_sellprice">{data.sellprice}</h4>
          <h4 className="detail_healing">{data.healing}</h4>
          <h4 className="detail_explain">{data.explain}</h4>
          <h4 className="detail_ingredient">{data.ingredient}</h4>
          <h4 className="detail_purpose">{data.purpose}</h4>
        </div>
        <Button onClick={() => onModifyBtn()}>삭제하기</Button>
      </div>
    );
  }
  function HarvestSort(data: HarvestType) {
    return (
      <div className="detail_wrap">
        <div className="detail_title">
          <h4 className="detail_english">파일 이름</h4>
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
        <div className="detail" key={data.name}>
          <h4 className="detail_english">{modifyPortrait}</h4>
          <h4 className="detail_name">{data.name}</h4>
          <h4 className="detail_season">{data.season}</h4>
          <h4 className="detail_buyprice">{data.buypricec}</h4>
          <h4 className="detail_sellprice">{data.sellprice}</h4>
          <h4 className="detail_obtainday">{data.obtainday}</h4>
          <h4 className="detail_healing">{data.healing}</h4>
          <h4 className="detail_detail">{data.detail}</h4>
          <h4 className="detail_explain">{data.explain}</h4>
          <h4 className="detail_purpose">{data.purpose}</h4>
        </div>
        <Button onClick={() => onModifyBtn()}>삭제하기</Button>
      </div>
    );
  }
  function MineralSort(data: MineralType) {
    return (
      <div className="detail_wrap">
        <div className="detail_title">
          <h4 className="detail_english">파일 이름</h4>
          <h4 className="detail_name">이름</h4>
          <h4 className="detail_sellprice">판매가격</h4>
          <h4 className="detail_explain">설명</h4>
          <h4 className="detail_purpose">용도</h4>
        </div>

        <div className="detail" key={data.name}>
          <h4 className="detail_english">{modifyPortrait}</h4>
          <h4 className="detail_name">{data.name}</h4>
          <h4 className="detail_sellprice">{data.sellprice}</h4>
          <h4 className="detail_explain">{data.explain}</h4>
          <h4 className="detail_purpose">{data.purpose}</h4>
        </div>
        <Button onClick={() => onModifyBtn()}>삭제하기</Button>
      </div>
    );
  }
  function PlantSort(data: PlantType) {
    return (
      <div className="detail_wrap">
        <div className="detail_title">
          <h4 className="detail_english">파일 이름</h4>
          <h4 className="detail_name">이름</h4>
          <h4 className="detail_season">계절</h4>
          <h4 className="detail_explain">설명</h4>
          <h4 className="detail_purpose">용도</h4>
        </div>

        <div className="detail" key={data.name}>
          <h4 className="detail_english">{modifyPortrait}</h4>
          <h4 className="detail_name">{data.name}</h4>
          <h4 className="detail_season">{data.season}</h4>
          <h4 className="detail_explain">{data.explain}</h4>
          <h4 className="detail_purpose">{data.purpose}</h4>
        </div>
        <Button onClick={() => onModifyBtn()}>삭제하기</Button>
      </div>
    );
  }
  function ProductSort(data: ProductType) {
    return (
      <div className="detail_wrap">
        <div className="detail_title">
          <h4 className="detail_english">파일 이름</h4>
          <h4 className="detail_name">이름</h4>
          <h4 className="detail_sellprice">판매가격</h4>
          <h4 className="detail_healing">회복량</h4>
          <h4 className="detail_explain">설명</h4>
          <h4 className="detail_purpose">용도</h4>
        </div>

        <div className="detail" key={data.name}>
          <h4 className="detail_english">{modifyPortrait}</h4>
          <h4 className="detail_name">{data.name}</h4>
          <h4 className="detail_sellprice">{data.sellprice}</h4>
          <h4 className="detail_healing">{data.healing}</h4>
          <h4 className="detail_explain">{data.explain}</h4>
          <h4 className="detail_purpose">{data.purpose}</h4>
        </div>
        <Button onClick={() => onModifyBtn()}>삭제하기</Button>
      </div>
    );
  }
  //////////////////////
  // 데이터 sort 부분 //
  //////////////////////

  function ItemTab(e: RadioChangeEvent) {
    setHarvestData(inicialHarvest);
    setPlantData(inicialPlant);
    setFishData(inicialFish);
    setMineralData(inicialMineral);
    setProductData(inicialProduct);
    setFoodData(inicialFood);
    setFindValue("");
    setTabValue(e.target.value);
    SelectTab(e.target.value);
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
    setModifyName("");
    setModifyPortrait("");
  }
  function onFindItem(e: BaseSyntheticEvent) {
    setFindValue(e.target.value);
  }
  function onFindDB() {
    let findsrc = "";
    const constValue = "Resource/Object/";
    switch (tabValue) {
      case 1: {
        findsrc = constValue + "Harvest";
        onFindHarvest(findsrc);
        break;
      }
      case 2: {
        findsrc = constValue + "Plant";
        onFindPlant(findsrc);
        break;
      }
      case 3: {
        findsrc = constValue + "Fish";
        onFindFish(findsrc);
        break;
      }
      case 4: {
        findsrc = constValue + "Mineral";
        onFindMineral(findsrc);
        break;
      }
      case 5: {
        findsrc = constValue + "Product";
        onFindProduct(findsrc);
        break;
      }
      case 6: {
        findsrc = constValue + "Food";
        onFindFood(findsrc);
        break;
      }

      default:
        break;
    }
  }
  function onFindHarvest(src: string) {
    const dataObject = firestore.collection(src);
    const dataObjectQuery = query(
      firestore.collection(src).where("name", "==", findValue)
    );
    getDocs(dataObjectQuery).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: HarvestType = {
          name: data.name,
          portrait: data.portrait,
          season: data.season,
          sellprice: data.sellprice,
          purpose: data.purpose,
          buypricec: data.buypricec,
          detail: data.detail,
          healing: data.healing,
          explain: data.explain,
          obtainday: data.obtainday,
        };
        console.log(pushdata);
        setHarvestData(pushdata);
        let purposeString: string = "";
        pushdata.purpose.map((item, index) => {
          if (index === pushdata.purpose.length - 1) {
            purposeString += item;
          } else {
            purposeString += item + ",";
          }
        });
        let healingString: string = "";
        pushdata.healing.map((item, index) => {
          if (index === pushdata.healing.length - 1) {
            healingString += item;
          } else {
            healingString += item + ",";
          }
        });
        let obtainString: string = "";
        pushdata.obtainday.map((item, index) => {
          if (index === pushdata.obtainday.length - 1) {
            obtainString += item;
          } else {
            obtainString += item + ",";
          }
        });
        setModifyName(pushdata.name);
        setModifyPortrait(pushdata.portrait);
      });
    });
  }
  function onFindPlant(src: string) {
    const dataObject = firestore.collection(src);
    const dataObjectQuery = query(
      firestore.collection(src).where("name", "==", findValue)
    );
    getDocs(dataObjectQuery).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: PlantType = {
          name: data.name,
          portrait: data.portrait,
          season: data.season,
          purpose: data.purpose,
          explain: data.explain,
        };
        console.log(pushdata);
        setPlantData(pushdata);
        let purposeString: string = "";
        pushdata.purpose.map((item, index) => {
          if (index === pushdata.purpose.length - 1) {
            purposeString += item;
          } else {
            purposeString += item + ",";
          }
        });
        setModifyName(pushdata.name);
        setModifyPortrait(pushdata.portrait);
      });
    });
  }
  function onFindFish(src: string) {
    const dataObject = firestore.collection(src);
    const dataObjectQuery = query(
      firestore.collection(src).where("name", "==", findValue)
    );
    getDocs(dataObjectQuery).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: FishType = {
          name: data.name,
          portrait: data.portrait,
          season: data.season,
          sellprice: data.sellprice,
          purpose: data.purpose,
          location: data.location,
          time: data.time,
          weather: data.weather,
        };
        console.log(pushdata);
        setFishData(pushdata);
        let purposeString: string = "";
        pushdata.purpose.map((item, index) => {
          if (index === pushdata.purpose.length - 1) {
            purposeString += item;
          } else {
            purposeString += item + ",";
          }
        });
        setModifyName(pushdata.name);
        setModifyPortrait(pushdata.portrait);
      });
    });
  }
  function onFindMineral(src: string) {
    const dataObject = firestore.collection(src);
    const dataObjectQuery = query(
      firestore.collection(src).where("name", "==", findValue)
    );
    getDocs(dataObjectQuery).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: MineralType = {
          name: data.name,
          portrait: data.portrait,
          sellprice: data.sellprice,
          purpose: data.purpose,
          explain: data.explain,
        };
        console.log(pushdata);
        setMineralData(pushdata);
        let purposeString: string = "";
        pushdata.purpose.map((item, index) => {
          if (index === pushdata.purpose.length - 1) {
            purposeString += item;
          } else {
            purposeString += item + ",";
          }
        });
        setModifyName(pushdata.name);
        setModifyPortrait(pushdata.portrait);
      });
    });
  }
  function onFindProduct(src: string) {
    const dataObject = firestore.collection(src);
    const dataObjectQuery = query(
      firestore.collection(src).where("name", "==", findValue)
    );
    getDocs(dataObjectQuery).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: ProductType = {
          name: data.name,
          portrait: data.portrait,
          sellprice: data.sellprice,
          purpose: data.purpose,
          healing: data.healing,
          explain: data.explain,
        };
        console.log(pushdata);
        setProductData(pushdata);
        let purposeString: string = "";
        pushdata.purpose.map((item, index) => {
          if (index === pushdata.purpose.length - 1) {
            purposeString += item;
          } else {
            purposeString += item + ",";
          }
        });
        let healingString: string = "";
        pushdata.healing.map((item, index) => {
          if (index === pushdata.healing.length - 1) {
            healingString += item;
          } else {
            healingString += item + ",";
          }
        });
        setModifyName(pushdata.name);
        setModifyPortrait(pushdata.portrait);
      });
    });
  }
  function onFindFood(src: string) {
    const dataObject = firestore.collection(src);
    const dataObjectQuery = query(
      firestore.collection(src).where("name", "==", findValue)
    );
    getDocs(dataObjectQuery).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: FoodType = {
          name: data.name,
          portrait: data.portrait,
          sellprice: data.sellprice,
          purpose: data.purpose,
          healing: data.healing,
          explain: data.explain,
          ingredient: data.ingredient,
        };
        console.log(pushdata);
        setFoodData(pushdata);
        let purposeString: string = "";
        pushdata.purpose.map((item, index) => {
          if (index === pushdata.purpose.length - 1) {
            purposeString += item;
          } else {
            purposeString += item + ",";
          }
        });
        let healingString: string = "";
        pushdata.healing.map((item, index) => {
          if (index === pushdata.healing.length - 1) {
            healingString += item;
          } else {
            healingString += item + ",";
          }
        });
        let ingredientString: string = "";
        pushdata.ingredient.map((item, index) => {
          if (index === pushdata.ingredient.length - 1) {
            ingredientString += item;
          } else {
            ingredientString += item + ",";
          }
        });
        setModifyName(pushdata.name);
        setModifyPortrait(pushdata.portrait);
      });
    });
  }
  function onModifyBtn() {
    let findsrc = "";
    const constValue = "Resource/Object/";
    switch (tabValue) {
      case 1: {
        findsrc = constValue + "Harvest";
        const fbCharacter = firestore.collection(findsrc);
        fbCharacter
          .doc(modifyPortrait.substring(0, modifyPortrait.length - 4))
          .delete();
        alert("삭제되었습니다.");
        break;
      }
      case 2: {
        findsrc = constValue + "Plant";
        const fbCharacter = firestore.collection(findsrc);
        fbCharacter
          .doc(modifyPortrait.substring(0, modifyPortrait.length - 4))
          .delete();
        alert("삭제되었습니다.");
        break;
      }
      case 3: {
        findsrc = constValue + "Fish";
        const fbCharacter = firestore.collection(findsrc);
        fbCharacter
          .doc(modifyPortrait.substring(0, modifyPortrait.length - 4))
          .delete();
        alert("삭제되었습니다.");
        break;
      }
      case 4: {
        findsrc = constValue + "Mineral";
        const fbCharacter = firestore.collection(findsrc);
        fbCharacter
          .doc(modifyPortrait.substring(0, modifyPortrait.length - 4))
          .delete();
        alert("삭제되었습니다.");
        break;
      }
      case 5: {
        findsrc = constValue + "Product";
        const fbCharacter = firestore.collection(findsrc);
        fbCharacter
          .doc(modifyPortrait.substring(0, modifyPortrait.length - 4))
          .delete();
        alert("삭제되었습니다.");
        break;
      }
      case 6: {
        findsrc = constValue + "Food";
        const fbCharacter = firestore.collection(findsrc);
        fbCharacter
          .doc(modifyPortrait.substring(0, modifyPortrait.length - 4))
          .delete();
        alert("삭제되었습니다.");
        break;
      }

      default:
        break;
    }
  }
}
