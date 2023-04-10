import { BaseSyntheticEvent, useState } from "react";
import { firestore } from "../firebase";
import "firebase/firestore";
import { collection, DocumentData, getDocs, query } from "firebase/firestore";

export default function CropComp() {
  const [nameValue, setNameValue] = useState("");
  const [portraitValue, setPortraitValue] = useState("");
  const [seasonValue, setSeasonValue] = useState("");
  const [healingValue, setHealingValue] = useState("");
  const [sellpriceValue, setSellpriceValue] = useState(0);
  const [buypriceValue, setBuypriceValue] = useState(0);
  const [obtaindayValue, setObtaindayValue] = useState("");
  const [explainValue, setExplainValue] = useState("");
  const [purposeValue, setPurposeValue] = useState<string>("");
  const [detailValue, setDetailValue] = useState<string>("");

  return (
    <div className="item_add_style">
      <div>
        <p>작물 이름 : </p>
        <input type="text" value={nameValue} onChange={onChangeNameValue} />
      </div>
      <div>
        <p>초상화 : </p>
        <input
          type="text"
          value={portraitValue}
          onChange={onChangePortraitValue}
        />
      </div>
      <div>
        <p>성장 기간 : </p>
        <input
          type="text"
          value={obtaindayValue}
          onChange={onChangeObtaindayValue}
        />
      </div>
      <div>
        <p>계절 : </p>
        <input type="text" value={seasonValue} onChange={onChangeSeasonValue} />
      </div>
      <div>
        <p>회복량 : </p>
        <input
          type="text"
          value={healingValue}
          onChange={onChangeHealingValue}
        />
      </div>
      <div>
        <p>구매가격 : </p>
        <input
          type="text"
          value={buypriceValue}
          onChange={onChangeBuypriceValue}
        />
      </div>
      <div>
        <p>판매가격 : </p>
        <input
          type="text"
          value={sellpriceValue}
          onChange={onChangeSellpriceValue}
        />
      </div>
      <div>
        <p>추가설명 : </p>
        <input
          type="text"
          value={explainValue}
          onChange={onChangeExplainValue}
        />
      </div>
      <div>
        <p>목적 : </p>
        <input
          type="text"
          value={purposeValue}
          onChange={onChangePurposeValue}
        />
      </div>
      <div>
        <p>디테일 : </p>
        <input type="text" value={detailValue} onChange={onChangeDetailValue} />
      </div>
      <button onClick={admitInfo}>등록</button>
    </div>
  );

  function onChangeNameValue(e: BaseSyntheticEvent) {
    setNameValue(e.target.value);
  }
  function onChangePortraitValue(e: BaseSyntheticEvent) {
    setPortraitValue(e.target.value);
  }
  function onChangeSeasonValue(e: BaseSyntheticEvent) {
    setSeasonValue(e.target.value);
  }
  function onChangeHealingValue(e: BaseSyntheticEvent) {
    setHealingValue(e.target.value);
  }
  function onChangeSellpriceValue(e: BaseSyntheticEvent) {
    setSellpriceValue(e.target.value);
  }
  function onChangeBuypriceValue(e: BaseSyntheticEvent) {
    setBuypriceValue(e.target.value);
  }
  function onChangeObtaindayValue(e: BaseSyntheticEvent) {
    setObtaindayValue(e.target.value);
  }
  function onChangeExplainValue(e: BaseSyntheticEvent) {
    setExplainValue(e.target.value);
  }
  function onChangePurposeValue(e: BaseSyntheticEvent) {
    setPurposeValue(e.target.value);
  }
  function onChangeDetailValue(e: BaseSyntheticEvent) {
    setDetailValue(e.target.value);
  }
  function admitInfo() {
    if (
      (nameValue &&
        healingValue &&
        obtaindayValue &&
        portraitValue !== "" &&
        sellpriceValue &&
        seasonValue.includes("봄")) ||
      seasonValue.includes("여름") ||
      seasonValue.includes("가을") ||
      seasonValue.includes("항상")
    ) {
      let obtainArrayString: Array<string>;
      let obtainArrayNumber: Array<number>;
      if (obtaindayValue.includes(",")) {
        obtainArrayString = obtaindayValue.split(",");
        obtainArrayNumber = obtainArrayString.map((value) => parseInt(value));
      } else {
        obtainArrayNumber = [parseInt(obtaindayValue)];
      }
      let healingArrayString: Array<string>;
      let healingArrayNumber: Array<number>;
      healingArrayString = healingValue.split(",");
      healingArrayNumber = healingArrayString.map((value) => parseInt(value));
      let purposeArrayString: Array<string>;
      purposeArrayString = purposeValue.split(",");

      const fbCharacter = firestore.collection("Resource/Object/Harvest");
      fbCharacter.doc(portraitValue).set({
        name: nameValue,
        portrait: portraitValue + ".png",
        season: seasonValue,
        sellprice: sellpriceValue,
        buypricec: buypriceValue,
        obtainday: obtainArrayNumber,
        healing: healingArrayNumber,
        explain: explainValue,
        purpose: purposeArrayString,
        detail: detailValue,
      });
      setNameValue("");
      setPortraitValue("");
      setSeasonValue("");
      setHealingValue("");
      setSellpriceValue(0);
      setBuypriceValue(0);
      setObtaindayValue("");
      setExplainValue("");
      setPurposeValue("");
      setDetailValue("");
    } else {
      alert("오류입니다.");
    }
  }
}
