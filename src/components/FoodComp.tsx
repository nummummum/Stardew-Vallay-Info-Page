import { BaseSyntheticEvent, useState } from "react";
import { firestore } from "../firebase";
import "firebase/firestore";
import { collection, DocumentData, getDocs, query } from "firebase/firestore";

export default function FoodComp() {
  const [nameValue, setNameValue] = useState("");
  const [portraitValue, setPortraitValue] = useState("");
  const [sellpriceValue, setSellpriceValue] = useState(0);
  const [healingValue, setHealingValue] = useState("");
  const [explainValue, setExplainValue] = useState("");
  const [ingredientValue, setIngredientValue] = useState("");
  const [purposeValue, setPurposeValue] = useState("");

  return (
    <div>
      <p>요리 이름 : </p>
      <input type="text" value={nameValue} onChange={onChangeNameValue} />
      <p>초상화 : </p>
      <input
        type="text"
        value={portraitValue}
        onChange={onChangePortraitValue}
      />
      <p>판매가격 : </p>
      <input
        type="text"
        value={sellpriceValue}
        onChange={onChangeSellpriceValue}
      />
      <p>회복량 : </p>
      <input type="text" value={healingValue} onChange={onChangeHealingValue} />
      <p>얻는 방법 : </p>
      <input type="text" value={explainValue} onChange={onChangeExplainValue} />
      <p>요리 재료 : </p>
      <input
        type="text"
        value={ingredientValue}
        onChange={onChangeIngredientValue}
      />
      <p>사용처 : </p>
      <input type="text" value={purposeValue} onChange={onChangePurposeValue} />
      <button onClick={admitInfo}>등록</button>
    </div>
  );

  function onChangeNameValue(e: BaseSyntheticEvent) {
    setNameValue(e.target.value);
  }
  function onChangePortraitValue(e: BaseSyntheticEvent) {
    setPortraitValue(e.target.value);
  }

  function onChangeSellpriceValue(e: BaseSyntheticEvent) {
    setSellpriceValue(e.target.value);
  }

  function onChangePurposeValue(e: BaseSyntheticEvent) {
    setPurposeValue(e.target.value);
  }
  function onChangeHealingValue(e: BaseSyntheticEvent) {
    setHealingValue(e.target.value);
  }
  function onChangeExplainValue(e: BaseSyntheticEvent) {
    setExplainValue(e.target.value);
  }
  function onChangeIngredientValue(e: BaseSyntheticEvent) {
    setIngredientValue(e.target.value);
  }
  function admitInfo() {
    if (nameValue && portraitValue !== "" && sellpriceValue) {
      let purposeArrayString: Array<string>;
      purposeArrayString = purposeValue.split(",");
      let ingredientString: Array<string>;
      ingredientString = ingredientValue.split(",");
      let healingArrayString: Array<string>;
      let healingArrayNumber: Array<number>;
      healingArrayString = healingValue.split(",");
      healingArrayNumber = healingArrayString.map((value) => parseInt(value));
      const fbCharacter = firestore.collection("Resource/Object/Food");
      fbCharacter.doc(portraitValue).set({
        name: nameValue,
        portrait: portraitValue + ".png",
        sellprice: sellpriceValue,
        healling: healingArrayNumber,
        purpose: purposeArrayString,
        ingredient: ingredientString,
        explain: explainValue,
      });
      setNameValue("");
      setPortraitValue("");
      setSellpriceValue(0);
      setPurposeValue("");
      setHealingValue("");
      setExplainValue("");
      setIngredientValue("");
    } else {
      alert("오류입니다.");
    }
  }
}
