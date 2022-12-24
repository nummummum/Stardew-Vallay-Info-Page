import { BaseSyntheticEvent, useState } from "react";
import { firestore } from "../firebase";
import "firebase/firestore";
import { collection, DocumentData, getDocs, query } from "firebase/firestore";

export default function MineralComp() {
  const [nameValue, setNameValue] = useState("");
  const [portraitValue, setPortraitValue] = useState("");
  const [sellpriceValue, setSellpriceValue] = useState(0);
  const [explainValue, setExplainValue] = useState("");
  const [purposeValue, setPurposeValue] = useState("");

  return (
    <div>
      <p>광물 이름 : </p>
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
      <p>획득처 : </p>
      <input type="text" value={explainValue} onChange={onChangeExplainValue} />
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

  function onChangeExplainValue(e: BaseSyntheticEvent) {
    setExplainValue(e.target.value);
  }
  function onChangePurposeValue(e: BaseSyntheticEvent) {
    setPurposeValue(e.target.value);
  }
  function admitInfo() {
    if (nameValue && portraitValue !== "" && sellpriceValue) {
      let purposeArrayString: Array<string>;
      purposeArrayString = purposeValue.split(",");
      const fbCharacter = firestore.collection("Resource/Object/Mineral");
      fbCharacter.doc(portraitValue).set({
        name: nameValue,
        portrait: portraitValue + ".png",
        sellprice: sellpriceValue,
        explain: explainValue,
        purpose: purposeArrayString,
      });
      setNameValue("");
      setPortraitValue("");
      setSellpriceValue(0);
      setExplainValue("");
      setPurposeValue("");
    } else {
      alert("오류입니다.");
    }
  }
}
