import { BaseSyntheticEvent, useState } from "react";
import { firestore } from "../firebase";
import "firebase/firestore";
import { collection, DocumentData, getDocs, query } from "firebase/firestore";

export default function PlantComp() {
  const [nameValue, setNameValue] = useState("");
  const [portraitValue, setPortraitValue] = useState("");
  const [seasonValue, setSeasonValue] = useState("");
  const [explainValue, setExplainValue] = useState("");
  const [purposeValue, setPurposeValue] = useState("");

  return (
    <div>
      <p>채집물 이름 : </p>
      <input type="text" value={nameValue} onChange={onChangeNameValue} />
      <p>초상화 : </p>
      <input
        type="text"
        value={portraitValue}
        onChange={onChangePortraitValue}
      />
      <p>입수처 : </p>
      <input type="text" value={explainValue} onChange={onChangeExplainValue} />

      <p>계절 : </p>
      <input type="text" value={seasonValue} onChange={onChangeSeasonValue} />

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
  function onChangeSeasonValue(e: BaseSyntheticEvent) {
    setSeasonValue(e.target.value);
  }
  function onChangeExplainValue(e: BaseSyntheticEvent) {
    setExplainValue(e.target.value);
  }
  function onChangePurposeValue(e: BaseSyntheticEvent) {
    setPurposeValue(e.target.value);
  }

  function admitInfo() {
    if (
      (nameValue && portraitValue !== "" && seasonValue.includes("봄")) ||
      seasonValue.includes("여름") ||
      seasonValue.includes("가을") ||
      seasonValue.includes("겨울") ||
      seasonValue.includes("항상")
    ) {
      let purposeArrayString: Array<string>;
      purposeArrayString = purposeValue.split(",");

      const fbCharacter = firestore.collection("Resource/Object/Plant");
      fbCharacter.doc(portraitValue).set({
        name: nameValue,
        portrait: portraitValue + ".png",
        season: seasonValue,
        explain: explainValue,
        purpose: purposeArrayString,
      });
      setNameValue("");
      setPortraitValue("");
      setSeasonValue("");
      setExplainValue("");
      setPurposeValue("");
    } else {
      alert("오류입니다.");
    }
  }
}
