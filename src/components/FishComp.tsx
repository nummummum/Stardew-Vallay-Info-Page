import { BaseSyntheticEvent, useState } from "react";
import { firestore } from "../firebase";
import "firebase/firestore";
import { collection, DocumentData, getDocs, query } from "firebase/firestore";

export default function FishComp() {
  const [nameValue, setNameValue] = useState("");
  const [portraitValue, setPortraitValue] = useState("");
  const [seasonValue, setSeasonValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [sellpriceValue, setSellpriceValue] = useState(0);
  const [weatherValue, setWeatherValue] = useState("");
  const [purposeValue, setPurposeValue] = useState("");
  const [timeValue, setTimeValue] = useState("");

  return (
    <div>
      <p>물고기 이름 : </p>
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
      <p>서식지 : </p>
      <input
        type="text"
        value={locationValue}
        onChange={onChangeLocationValue}
      />
      <p>출몰 시간 : </p>
      <input type="text" value={timeValue} onChange={onChangeTimeValue} />

      <p>계절 : </p>
      <input type="text" value={seasonValue} onChange={onChangeSeasonValue} />

      <p>날씨 : </p>
      <input type="text" value={weatherValue} onChange={onChangeWeatherValue} />

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
  function onChangeLocationValue(e: BaseSyntheticEvent) {
    setLocationValue(e.target.value);
  }
  function onChangeSellpriceValue(e: BaseSyntheticEvent) {
    setSellpriceValue(e.target.value);
  }
  function onChangeWeatherValue(e: BaseSyntheticEvent) {
    setWeatherValue(e.target.value);
  }
  function onChangeTimeValue(e: BaseSyntheticEvent) {
    setTimeValue(e.target.value);
  }
  function onChangePurposeValue(e: BaseSyntheticEvent) {
    setPurposeValue(e.target.value);
  }

  function admitInfo() {
    if (
      (nameValue &&
        weatherValue &&
        timeValue &&
        portraitValue !== "" &&
        sellpriceValue &&
        seasonValue.includes("봄")) ||
      seasonValue.includes("여름") ||
      seasonValue.includes("가을") ||
      seasonValue.includes("겨울") ||
      seasonValue.includes("항상")
    ) {
      let purposeArrayString: Array<string>;
      purposeArrayString = purposeValue.split(",");
      const fbCharacter = firestore.collection("Resource/Object/Fish");
      fbCharacter.doc(portraitValue).set({
        name: nameValue,
        portrait: portraitValue + ".png",
        season: seasonValue,
        sellprice: sellpriceValue,
        weather: weatherValue,
        location: locationValue,
        time: timeValue,
        purpose: purposeArrayString,
      });
      setNameValue("");
      setPortraitValue("");
      setSeasonValue("");
      setWeatherValue("");
      setSellpriceValue(0);
      setLocationValue("");
      setTimeValue("");
      setPurposeValue("");
    } else {
      alert("오류입니다.");
    }
  }
}
