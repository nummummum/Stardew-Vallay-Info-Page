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
export default function AdminModifyItem() {
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
  const [modifyBuyprice, setModifyBuyprice] = useState("");
  const [modifySellprice, setModifySellprice] = useState("");
  const [modifyLocation, setModifyLocation] = useState("");
  const [modifyTime, setModifyTime] = useState("");
  const [modifyWeather, setModifyWeather] = useState("");
  const [modifyPurpose, setModifyPurpose] = useState("");
  const [modifyPurposeArray, setModifyPurposeArray] = useState<string[]>([]);
  const [modifySeason, setModifySeason] = useState("");
  const [modifyDetail, setModifyDetail] = useState("");
  const [modifyHealing, setModifyHealing] = useState("");
  const [modifyHealingArray, setModifyHealingArray] = useState<number[]>([]);
  const [modifyExplain, setModifyExplain] = useState("");
  const [modifyObtainday, setModifyObtainday] = useState("");
  const [modifyObtaindayArray, setModifyObtaindayArray] = useState<number[]>(
    []
  );
  const [modifyIngredient, setModifyIngredient] = useState("");
  const [modifyIngredientArray, setModifyIngredientArray] = useState<string[]>(
    []
  );

  const fishRef = useRef<HTMLDivElement>(null);
  const foodRef = useRef<HTMLDivElement>(null);
  const mineralRef = useRef<HTMLDivElement>(null);
  const harvestRef = useRef<HTMLDivElement>(null);
  const plantRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  const [itemValue, setItemValue] = useState(1);
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
          <input
            className="detail_name"
            value={modifyName}
            onChange={(e) => onChangeModifyName(e)}
          />
          <input
            className="detail_season"
            value={modifySeason}
            onChange={(e) => onChangeModifySeason(e)}
          />
          <input
            className="detail_location"
            value={modifyLocation}
            onChange={(e) => onChangeModifyLocation(e)}
          />
          <input
            className="detail_time"
            value={modifyTime}
            onChange={(e) => onChangeModifyTime(e)}
          />
          <input
            className="detail_weather"
            value={modifyWeather}
            onChange={(e) => onChangeModifyWeather(e)}
          />
          <input
            className="detail_purpose"
            value={modifyPurpose}
            onChange={(e) => onChangeModifyPurpose(e)}
          />
        </div>
        <Button onClick={() => onModifyBtn()}>수정하기</Button>
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
          <input
            className="detail_name"
            value={modifyName}
            onChange={(e) => onChangeModifyName(e)}
          />
          <input
            className="detail_sellprice"
            value={modifySellprice}
            onChange={(e) => onChangeModifySellprice(e)}
          />
          <input
            className="detail_healing"
            value={modifyHealing}
            onChange={(e) => onChangeModifyHealing(e)}
          />
          <input
            className="detail_explain"
            value={modifyExplain}
            onChange={(e) => onChangeModifyExplain(e)}
          />
          <input
            className="detail_ingredient"
            value={modifyIngredient}
            onChange={(e) => onChangeModifyIngredient(e)}
          />
          <input
            className="detail_purpose"
            value={modifyPurpose}
            onChange={(e) => onChangeModifyPurpose(e)}
          />
        </div>
        <Button onClick={() => onModifyBtn()}>수정하기</Button>
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
          <input
            className="detail_name"
            value={modifyName}
            onChange={(e) => onChangeModifyName(e)}
          />
          <input
            className="detail_season"
            value={modifySeason}
            onChange={(e) => onChangeModifySeason(e)}
          />
          <input
            className="detail_buyprice"
            value={modifyBuyprice}
            onChange={(e) => onChangeModifyBuyprice(e)}
          />
          <input
            className="detail_sellprice"
            value={modifySellprice}
            onChange={(e) => onChangeModifySellprice(e)}
          />
          <input
            className="detail_obtainday"
            value={modifyObtainday}
            onChange={(e) => onChangeModifyObtainday(e)}
          />
          <input
            className="detail_healing"
            value={modifyHealing}
            onChange={(e) => onChangeModifyHealing(e)}
          />
          <input
            className="detail_detail"
            value={modifyDetail}
            onChange={(e) => onChangeModifyDetail(e)}
          />
          <input
            className="detail_explain"
            value={modifyExplain}
            onChange={(e) => onChangeModifyExplain(e)}
          />
          <input
            className="detail_purpose"
            value={modifyPurpose}
            onChange={(e) => onChangeModifyPurpose(e)}
          />
        </div>
        <Button onClick={() => onModifyBtn()}>수정하기</Button>
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
          <input
            className="detail_name"
            value={modifyName}
            onChange={(e) => onChangeModifyName(e)}
          />
          <input
            className="detail_sellprice"
            value={modifySellprice}
            onChange={(e) => onChangeModifySellprice(e)}
          />
          <input
            className="detail_explain"
            value={modifyExplain}
            onChange={(e) => onChangeModifyExplain(e)}
          />
          <input
            className="detail_purpose"
            value={modifyPurpose}
            onChange={(e) => onChangeModifyPurpose(e)}
          />
        </div>
        <Button onClick={() => onModifyBtn()}>수정하기</Button>
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
          <input
            className="detail_name"
            value={modifyName}
            onChange={(e) => onChangeModifyName(e)}
          />
          <input
            className="detail_season"
            value={modifySeason}
            onChange={(e) => onChangeModifySeason(e)}
          />
          <input
            className="detail_explain"
            value={modifyExplain}
            onChange={(e) => onChangeModifyExplain(e)}
          />
          <input
            className="detail_purpose"
            value={modifyPurpose}
            onChange={(e) => onChangeModifyPurpose(e)}
          />
        </div>
        <Button onClick={() => onModifyBtn()}>수정하기</Button>
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
          <input
            className="detail_name"
            value={modifyName}
            onChange={(e) => onChangeModifyName(e)}
          />
          <input
            className="detail_sellprice"
            value={modifySellprice}
            onChange={(e) => onChangeModifySellprice(e)}
          />
          <input
            className="detail_healing"
            value={modifyHealing}
            onChange={(e) => onChangeModifyHealing(e)}
          />
          <input
            className="detail_explain"
            value={modifyExplain}
            onChange={(e) => onChangeModifyExplain(e)}
          />
          <input
            className="detail_purpose"
            value={modifyPurpose}
            onChange={(e) => onChangeModifyPurpose(e)}
          />
        </div>
        <Button onClick={() => onModifyBtn()}>수정하기</Button>
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
    setModifyBuyprice("");
    setModifyDetail("");
    setModifyExplain("");
    setModifyHealing("");
    setModifyHealingArray([]);
    setModifyIngredient("");
    setModifyIngredientArray([]);
    setModifyLocation("");
    setModifyName("");
    setModifyObtainday("");
    setModifyObtaindayArray([]);
    setModifyPortrait("");
    setModifySeason("");
    setModifySellprice("");
    setModifyTime("");
    setModifyWeather("");
    setModifyPurpose("");
    setModifyPurposeArray([]);
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
        setModifySeason(pushdata.season);
        setModifySellprice(pushdata.sellprice);
        setModifyBuyprice(pushdata.buypricec);
        setModifyDetail(pushdata.detail);
        setModifyExplain(pushdata.explain);
        setModifyHealing(healingString);
        setModifyHealingArray(pushdata.healing);
        setModifyObtainday(obtainString);
        setModifyObtaindayArray(pushdata.obtainday);
        setModifyPurpose(purposeString);
        setModifyPurposeArray(pushdata.purpose);
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
        setModifySeason(pushdata.season);
        setModifyExplain(pushdata.explain);
        setModifyPurpose(purposeString);
        setModifyPurposeArray(pushdata.purpose);
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
        setModifySeason(pushdata.season);
        setModifySellprice(pushdata.sellprice);
        setModifyLocation(pushdata.location);
        setModifyTime(pushdata.time);
        setModifyWeather(pushdata.weather);
        setModifyPurpose(purposeString);
        setModifyPurposeArray(pushdata.purpose);
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
        setModifyExplain(pushdata.explain);
        setModifySellprice(pushdata.sellprice);
        setModifyPurpose(purposeString);
        setModifyPurposeArray(pushdata.purpose);
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
        setModifyExplain(pushdata.explain);
        setModifySellprice(pushdata.sellprice);
        setModifyPurpose(purposeString);
        setModifyHealing(healingString);
        setModifyHealingArray(pushdata.healing);
        setModifyPurposeArray(pushdata.purpose);
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
        setModifyExplain(pushdata.explain);
        setModifySellprice(pushdata.sellprice);
        setModifyPurpose(purposeString);
        setModifyHealing(healingString);
        setModifyHealingArray(pushdata.healing);
        setModifyPurposeArray(pushdata.purpose);
        setModifyIngredient(ingredientString);
        setModifyIngredientArray(pushdata.ingredient);
      });
    });
  }
  function onChangeModifyName(e: BaseSyntheticEvent) {
    setModifyName(e.target.value);
  }
  function onChangeModifyPortrait(e: BaseSyntheticEvent) {
    setModifyPortrait(e.target.value);
  }
  function onChangeModifyBuyprice(e: BaseSyntheticEvent) {
    setModifyBuyprice(e.target.value);
  }
  function onChangeModifySellprice(e: BaseSyntheticEvent) {
    setModifySellprice(e.target.value);
  }
  function onChangeModifyLocation(e: BaseSyntheticEvent) {
    setModifyLocation(e.target.value);
  }
  function onChangeModifyTime(e: BaseSyntheticEvent) {
    setModifyTime(e.target.value);
  }
  function onChangeModifyWeather(e: BaseSyntheticEvent) {
    setModifyWeather(e.target.value);
  }
  function onChangeModifyPurpose(e: BaseSyntheticEvent) {
    setModifyPurpose(e.target.value);
  }
  function onChangeModifySeason(e: BaseSyntheticEvent) {
    setModifySeason(e.target.value);
  }
  function onChangeModifyDetail(e: BaseSyntheticEvent) {
    setModifyDetail(e.target.value);
  }
  function onChangeModifyHealing(e: BaseSyntheticEvent) {
    setModifyHealing(e.target.value);
  }
  function onChangeModifyExplain(e: BaseSyntheticEvent) {
    setModifyExplain(e.target.value);
  }
  function onChangeModifyObtainday(e: BaseSyntheticEvent) {
    setModifyObtainday(e.target.value);
  }
  function onChangeModifyIngredient(e: BaseSyntheticEvent) {
    setModifyIngredient(e.target.value);
  }
  function onModifyBtn() {
    let findsrc = "";
    const constValue = "Resource/Object/";
    switch (tabValue) {
      case 1: {
        findsrc = constValue + "Harvest";
        let purposeArrayString: Array<string>;
        purposeArrayString = modifyPurpose.split(",");
        let healingArrayString: Array<string>;
        let healingArrayNumber: Array<number>;
        healingArrayString = modifyHealing.split(",");
        healingArrayNumber = healingArrayString.map((value) => parseInt(value));
        let obtainArrayString: Array<string>;
        let obtainArrayNumber: Array<number>;
        obtainArrayString = modifyObtainday.split(",");
        obtainArrayNumber = obtainArrayString.map((value) => parseInt(value));
        const fbCharacter = firestore.collection(findsrc);
        fbCharacter
          .doc(modifyPortrait.substring(0, modifyPortrait.length - 4))
          .update({
            name: modifyName,
            portrait: modifyPortrait,
            season: modifySeason,
            buypricec: modifyBuyprice,
            sellprice: modifySellprice,
            purpose: purposeArrayString,
            detail: modifyDetail,
            explain: modifyExplain,
            healing: healingArrayNumber,
            obtainday: obtainArrayNumber,
          });
        alert("수정되었습니다.");
        break;
      }
      case 2: {
        findsrc = constValue + "Plant";
        let purposeArrayString: Array<string>;
        purposeArrayString = modifyPurpose.split(",");
        const fbCharacter = firestore.collection(findsrc);
        fbCharacter
          .doc(modifyPortrait.substring(0, modifyPortrait.length - 4))
          .update({
            name: modifyName,
            portrait: modifyPortrait,
            season: modifySeason,
            explain: modifyExplain,
            purpose: purposeArrayString,
          });
        alert("수정되었습니다.");
        break;
      }
      case 3: {
        findsrc = constValue + "Fish";
        let purposeArrayString: Array<string>;
        purposeArrayString = modifyPurpose.split(",");
        const fbCharacter = firestore.collection(findsrc);
        fbCharacter
          .doc(modifyPortrait.substring(0, modifyPortrait.length - 4))
          .update({
            name: modifyName,
            portrait: modifyPortrait,
            season: modifySeason,
            sellprice: modifySellprice,
            weather: modifyWeather,
            location: modifyLocation,
            time: modifyTime,
            purpose: purposeArrayString,
          });
        alert("수정되었습니다.");
        break;
      }
      case 4: {
        findsrc = constValue + "Mineral";
        let purposeArrayString: Array<string>;
        purposeArrayString = modifyPurpose.split(",");
        const fbCharacter = firestore.collection(findsrc);
        fbCharacter
          .doc(modifyPortrait.substring(0, modifyPortrait.length - 4))
          .update({
            name: modifyName,
            portrait: modifyPortrait,
            sellprice: modifySellprice,
            explain: modifyExplain,
            purpose: purposeArrayString,
          });
        alert("수정되었습니다.");
        break;
      }
      case 5: {
        findsrc = constValue + "Product";
        let purposeArrayString: Array<string>;
        purposeArrayString = modifyPurpose.split(",");
        let healingArrayString: Array<string>;
        let healingArrayNumber: Array<number>;
        healingArrayString = modifyHealing.split(",");
        healingArrayNumber = healingArrayString.map((value) => parseInt(value));
        const fbCharacter = firestore.collection(findsrc);
        fbCharacter
          .doc(modifyPortrait.substring(0, modifyPortrait.length - 4))
          .update({
            name: modifyName,
            portrait: modifyPortrait,
            sellprice: modifySellprice,
            healing: healingArrayNumber,
            explain: modifyExplain,
            purpose: purposeArrayString,
          });
        alert("수정되었습니다.");
        break;
      }
      case 6: {
        findsrc = constValue + "Food";
        let purposeArrayString: Array<string>;
        purposeArrayString = modifyPurpose.split(",");
        let healingArrayString: Array<string>;
        let healingArrayNumber: Array<number>;
        healingArrayString = modifyHealing.split(",");
        healingArrayNumber = healingArrayString.map((value) => parseInt(value));
        let ingredientArrayString: Array<string>;
        ingredientArrayString = modifyIngredient.split(",");
        const fbCharacter = firestore.collection(findsrc);
        fbCharacter
          .doc(modifyPortrait.substring(0, modifyPortrait.length - 4))
          .update({
            name: modifyName,
            portrait: modifyPortrait,
            sellprice: modifySellprice,
            explain: modifyExplain,
            purpose: purposeArrayString,
            ingredient: ingredientArrayString,
            healing: healingArrayNumber,
          });
        alert("수정되었습니다.");
        break;
      }

      default:
        break;
    }
  }
}
