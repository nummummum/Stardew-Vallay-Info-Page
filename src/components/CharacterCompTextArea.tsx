import {
  BaseSyntheticEvent,
  useEffect,
  useState,
  useRef,
  ChangeEvent,
} from "react";
import { firestore } from "../firebase";
import "firebase/firestore";
import { collection, DocumentData, getDocs, query } from "firebase/firestore";
import {
  characterType,
  daytype,
  eventContent,
  eventType,
  favoriteType,
  InputItem,
  ItemCover,
  keyvalue,
  ItemCover2,
} from "../types/types";
import "./Schedule.scss";
export default function CharacterCompTextArea() {
  const [nameValue, setNameValue] = useState("");
  const [portraitValue, setPortraitValue] = useState("");
  const [birthValue, setBirthValue] = useState("");
  const [marryValue, setMarryValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [favoriteValue, setFavoriteValue] = useState<favoriteType>({
    favorite: {
      love: "",
      like: "",
      normal: "",
      dislike: "",
      hate: "",
    },
  });
  const [schedule, setSchedule] = useState<ItemCover2[]>([
    {
      season: "",
      title: "",
      id: 0,
      schedule: [
        {
          textArea: "",
        },
      ],
    },
  ]);
  const [scheduleSubmit, setScheduleSubmit] = useState<ItemCover[]>([]);
  const [eventValue, setEventValue] = useState<eventType[]>([
    {
      condition: "",
      id: 0,
      choice: [
        {
          id: 0,
          friendship: 0,
          content: "",
        },
      ],
    },
  ]);
  useEffect(() => {}, []);
  return (
    <div>
      <p>캐릭터 이름 : </p>
      <input type="text" value={nameValue} onChange={onChangeNameValue} />
      <p>초상화 : </p>
      <input
        type="text"
        value={portraitValue}
        onChange={onChangePortraitValue}
      />
      <p>생일 : </p>
      <input type="text" value={birthValue} onChange={onChangeBirthValue} />
      <p>성별 (남자 or 여자) : </p>
      <input type="text" value={genderValue} onChange={onChangeGenderValue} />
      <p>결혼 (가능 or 불가능) : </p>
      <input type="text" value={marryValue} onChange={onChangeMarryValue} />
      <p>스케쥴 : </p>
      <div>{scheduleCard()}</div>
      <p>호감도 : (,로 구별)</p>
      <p>
        사랑함{" "}
        <input
          type="text"
          value={favoriteValue.favorite.love}
          onChange={(e) => {
            handleFavoriteChange(e, 1);
          }}
        />
      </p>
      <p>
        좋아함{" "}
        <input
          type="text"
          value={favoriteValue.favorite.like}
          onChange={(e) => {
            handleFavoriteChange(e, 2);
          }}
        />
      </p>
      <p>
        보통{" "}
        <input
          type="text"
          value={favoriteValue.favorite.normal}
          onChange={(e) => {
            handleFavoriteChange(e, 3);
          }}
        />
      </p>
      <p>
        싫어함{" "}
        <input
          type="text"
          value={favoriteValue.favorite.dislike}
          onChange={(e) => {
            handleFavoriteChange(e, 4);
          }}
        />
      </p>
      <p>
        혐오함{" "}
        <input
          type="text"
          value={favoriteValue.favorite.hate}
          onChange={(e) => {
            handleFavoriteChange(e, 5);
          }}
        />
      </p>
      {eventCard()}
      <button onClick={admitInfo}>등록</button>
    </div>
  );

  function onChangeNameValue(e: BaseSyntheticEvent) {
    setNameValue(e.target.value);
  }
  function onChangePortraitValue(e: BaseSyntheticEvent) {
    setPortraitValue(e.target.value);
  }
  function onChangeBirthValue(e: BaseSyntheticEvent) {
    setBirthValue(e.target.value);
  }
  function onChangeGenderValue(e: BaseSyntheticEvent) {
    setGenderValue(e.target.value);
  }
  function onChangeMarryValue(e: ChangeEvent<HTMLInputElement>) {
    setMarryValue(e.target.value);
  }
  function scheduleCard() {
    return (
      <div className="scheduleCard">
        -------------스케쥴 map-----------------
        {schedule.map((item, index) => (
          <div key={index}>
            <p>
              계절 or 상황{" "}
              <input
                type="text"
                className={`schedule-${index}`}
                value={item.season}
                onChange={(e) => {
                  handleSeasonChange(e, index);
                }}
              />
              {index === 0 && schedule.length < 99 && (
                <button onClick={addCard}> + </button>
              )}
              {index > 0 && schedule[index - 1] ? (
                <button onClick={() => deleteCard(item.id)}> - </button>
              ) : (
                ""
              )}
            </p>
            <p></p>
            <p>
              제목{" "}
              <input
                type="text"
                className={`name-${index}`}
                value={item.title}
                onChange={(e) => {
                  handleNameChange(e, index);
                }}
              />
            </p>
            {schedule[index].schedule.map((scheduleItem, scheduleIndex) => (
              <div key={scheduleIndex}>
                스케쥴
                <textarea
                  onChange={(e) => handleTextArea(e, index, scheduleIndex)}
                  value={scheduleItem.textArea}
                />
              </div>
            ))}
          </div>
        ))}
        -------------스케쥴 map-----------------
      </div>
    );
  }
  function eventCard() {
    return (
      <div className="eventCard">
        -------------이벤트 map-----------------
        {eventValue.map((item, index) => (
          <div key={index}>
            <p>
              이벤트 조건 :
              <input
                type="text"
                className={`condition-${index}`}
                value={item.condition}
                onChange={(e) => {
                  handleConditionChange(e, index);
                }}
              />
              {index === 0 && eventValue.length < 99 && (
                <button onClick={addEventCard}> + </button>
              )}
              {index > 0 && eventValue[index - 1] ? (
                <button onClick={() => deleteEventCard(item.id)}> - </button>
              ) : (
                ""
              )}
            </p>
            <p></p>
            {eventValue[index].choice.map((eventItem, eventIndex) => (
              <div key={eventIndex}>
                상세 내용
                <input
                  type="text"
                  className={`title-${eventIndex}`}
                  onChange={(e) => handleEventContChange(e, index, eventIndex)}
                  value={eventItem.content}
                />
                우정 변화도
                <input
                  type="text"
                  className={`content-${eventIndex}`}
                  onChange={(e) =>
                    handleEventFriendChange(e, index, eventIndex)
                  }
                  value={eventItem.friendship}
                />
                {eventIndex === 0 && eventValue[index].choice.length < 10 && (
                  <button onClick={() => addEventInput(index)}> + </button>
                )}
                {eventIndex > 0 && eventValue[index].choice[eventIndex - 1] ? (
                  <button onClick={() => deleteEventInput(index, eventItem.id)}>
                    -
                  </button>
                ) : (
                  ""
                )}
                <p></p>
              </div>
            ))}
          </div>
        ))}
        -------------이벤트 map-----------------
      </div>
    );
  }

  function addCard() {
    const input = {
      id: schedule.length,
      season: "",
      title: "",
      schedule: [
        {
          textArea: "",
        },
      ],
    };
    setSchedule([...schedule, input]);
  }
  function deleteCard(index: number) {
    setSchedule(schedule.filter((item) => item.id !== index));
  }
  function addEventInput(index: number) {
    const input: eventContent = {
      id: eventValue[index].choice.length,
      friendship: 0,
      content: "",
    };
    const copydata = [...eventValue];
    copydata[index].choice.push(input);
    setEventValue(copydata);
  }
  function deleteEventInput(index: number, eventId: number) {
    const copydata = [...eventValue];
    const copydata2 = copydata[index].choice.filter(
      (item) => item.id !== eventId
    );
    copydata[index].choice = copydata2;
    setEventValue(copydata);
  }
  function addEventCard() {
    const input = {
      id: eventValue.length,
      condition: "",
      choice: [
        {
          id: 0,
          friendship: 0,
          content: "",
        },
      ],
    };
    setEventValue([...eventValue, input]);
  }
  function deleteEventCard(index: number) {
    setEventValue(eventValue.filter((item) => item.id !== index));
  }
  function handleSeasonChange(e: ChangeEvent<HTMLInputElement>, index: number) {
    const copydata = [...schedule];
    copydata[index].season = e.target.value;
    setSchedule(copydata);
    console.log(copydata);
  }
  function handleNameChange(e: ChangeEvent<HTMLInputElement>, index: number) {
    const copydata = [...schedule];
    copydata[index].title = e.target.value;
    setSchedule(copydata);
    console.log(copydata);
  }
  function handleTextArea(
    e: ChangeEvent<HTMLTextAreaElement>,
    index: number,
    scheduleIndex: number
  ) {
    const copydata = [...schedule];
    copydata[index].schedule[scheduleIndex].textArea = e.target.value;
    setSchedule(copydata);
    console.log(copydata);
  }
  function handleFavoriteChange(
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const copydata = { ...favoriteValue };
    switch (index) {
      case 1:
        copydata.favorite.love = e.target.value;
        break;
      case 2:
        copydata.favorite.like = e.target.value;
        break;
      case 3:
        copydata.favorite.normal = e.target.value;
        break;
      case 4:
        copydata.favorite.dislike = e.target.value;
        break;
      case 5:
        copydata.favorite.hate = e.target.value;
        break;
      default:
        return;
    }
    setFavoriteValue(copydata);
  }
  function handleConditionChange(
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const copydata = [...eventValue];
    copydata[index].condition = e.target.value;
    setEventValue(copydata);
    console.log(copydata);
  }
  function handleEventContChange(
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    eventIndex: number
  ) {
    const copydata = [...eventValue];
    copydata[index].choice[eventIndex].content = e.target.value;
    setEventValue(copydata);
    console.log(copydata);
  }
  function handleEventFriendChange(
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    eventIndex: number
  ) {
    const copydata = [...eventValue];
    copydata[index].choice[eventIndex].friendship = parseInt(e.target.value);
    setEventValue(copydata);
    console.log(copydata);
  }
  function admitInfo() {
    if (
      nameValue &&
      birthValue &&
      portraitValue !== "" &&
      (marryValue === "가능" || "불가능")
    ) {
      const favLoveArray: Array<string> =
        favoriteValue.favorite.love.split(",");
      const favLikeArray: Array<string> =
        favoriteValue.favorite.like.split(",");
      const favNormalArray: Array<string> =
        favoriteValue.favorite.normal.split(",");
      const favDislikeArray: Array<string> =
        favoriteValue.favorite.dislike.split(",");
      const favHateArray: Array<string> =
        favoriteValue.favorite.hate.split(",");
      const favArray = {
        love: favLoveArray,
        like: favLikeArray,
        normal: favNormalArray,
        dislike: favDislikeArray,
        hate: favHateArray,
      };
      let textArray: string[];
      let convertInput: InputItem[] = [];
      schedule.map((item) => {
        textArray = item.schedule[0].textArea.split("\n");
        textArray.map((itemArea) => {
          const modifyItem = itemArea.split("\t");
          const itemTime = modifyItem[0];
          const itemContent = modifyItem[1];
          if (
            itemTime === "" ||
            itemTime === undefined ||
            itemContent === "" ||
            itemContent === undefined
          ) {
            return;
          } else {
            convertInput.push({
              time: itemTime,
              content: itemContent,
              id: convertInput.length,
            });
          }
        });
        scheduleSubmit.push({
          id: item.id,
          season: item.season,
          title: item.title,
          schedule: convertInput,
        });
        convertInput = [];
      });
      const fbCharacter = firestore.collection("Resource/Character/Citizen");
      fbCharacter.doc(portraitValue).set({
        name: nameValue,
        portrait: portraitValue + ".png",
        birth: birthValue,
        gender: genderValue,
        marry: marryValue,
        favorite: favArray,
        event: eventValue,
        schedule: scheduleSubmit,
      });
      setNameValue("");
      setPortraitValue("");
      setGenderValue("");
      setBirthValue("");
      setMarryValue("");
      setSchedule([
        {
          season: "",
          title: "",
          id: 0,
          schedule: [
            {
              textArea: "",
            },
          ],
        },
      ]);
      setFavoriteValue({
        favorite: {
          love: "",
          like: "",
          normal: "",
          dislike: "",
          hate: "",
        },
      });
      setEventValue([
        {
          condition: "",
          id: 0,
          choice: [
            {
              id: 0,
              friendship: 0,
              content: "",
            },
          ],
        },
      ]);
    } else {
      alert("오류입니다.");
    }
  }
}
