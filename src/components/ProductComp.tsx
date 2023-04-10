import { BaseSyntheticEvent, useState } from "react";
import { firestore } from "../firebase";
import "firebase/firestore";
import { collection, DocumentData, getDocs, query } from "firebase/firestore";

export default function ProductComp() {
  const [nameValue, setNameValue] = useState("");
  const [portraitValue, setPortraitValue] = useState("");
  const [healingValue, setHealingValue] = useState("");
  const [sellpriceValue, setSellpriceValue] = useState(0);
  const [explainValue, setExplainValue] = useState("");
  const [purposeValue, setPurposeValue] = useState("");

  return (
    <div className="item_add_style">
      <div>
        <p>생산품 이름 : </p>
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
        <p>회복량 : </p>
        <input
          type="text"
          value={healingValue}
          onChange={onChangeHealingValue}
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
        <p>획득처 : </p>
        <input
          type="text"
          value={explainValue}
          onChange={onChangeExplainValue}
        />
      </div>
      <div>
        <p>사용처 : </p>
        <input
          type="text"
          value={purposeValue}
          onChange={onChangePurposeValue}
        />
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

  function onChangeHealingValue(e: BaseSyntheticEvent) {
    setHealingValue(e.target.value);
  }
  function onChangeSellpriceValue(e: BaseSyntheticEvent) {
    setSellpriceValue(e.target.value);
  }

  function onChangeExplainValue(e: BaseSyntheticEvent) {
    setExplainValue(e.target.value);
  }
  function onChangePurposeValue(e: BaseSyntheticEvent) {
    setPurposeValue(e.target.value);
  }
  function admitInfo() {
    if (nameValue && healingValue && portraitValue !== "") {
      let healingArrayString: Array<string>;
      let healingArrayNumber: Array<number>;
      healingArrayString = healingValue.split(",");
      healingArrayNumber = healingArrayString.map((value) => parseInt(value));
      let purposeArrayString: Array<string>;
      purposeArrayString = purposeValue.split(",");
      const fbCharacter = firestore.collection("Resource/Object/Product");
      fbCharacter.doc(portraitValue).set({
        name: nameValue,
        portrait: portraitValue + ".png",
        sellprice: sellpriceValue,
        healing: healingArrayNumber,
        explain: explainValue,
        purpose: purposeArrayString,
      });
      setNameValue("");
      setPortraitValue("");
      setHealingValue("");
      setSellpriceValue(0);
      setExplainValue("");
      setPurposeValue("");
    } else {
      alert("오류입니다.");
    }
  }
}
