import { useState, useEffect, useRef } from "react";
import { characterViewType, ItemCover } from "../types/types";
import { Button } from "antd";
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import "./CharacterShowComp.scss";
export default function CharacterShowComp(props: any) {
  const item: characterViewType = props.item;
  const index = props.index;
  const [changeSchedule, setChangeSchedule] = useState<string>("");
  const [changeFav, setChangeFav] = useState<string>("");
  const [springArray, setSpringArray] = useState<ItemCover[]>([]);
  const [summerArray, setSummerArray] = useState<ItemCover[]>([]);
  const [fallArray, setFallArray] = useState<ItemCover[]>([]);
  const [winterArray, setWinterArray] = useState<ItemCover[]>([]);
  const [missArray, setMissArray] = useState<ItemCover[]>([]);
  const [marryArray, setMarryArray] = useState<ItemCover[]>([]);

  const refSche = useRef<HTMLDivElement>(null);
  const refSpring = useRef<HTMLDivElement>(null);
  const refSummer = useRef<HTMLDivElement>(null);
  const refFall = useRef<HTMLDivElement>(null);
  const refWinter = useRef<HTMLDivElement>(null);
  const refMiss = useRef<HTMLDivElement>(null);
  const refMarry = useRef<HTMLDivElement>(null);

  const refFav = useRef<HTMLDivElement>(null);
  const refLove = useRef<HTMLDivElement>(null);
  const refLike = useRef<HTMLDivElement>(null);
  const refNormal = useRef<HTMLDivElement>(null);
  const refDislike = useRef<HTMLDivElement>(null);
  const refHate = useRef<HTMLDivElement>(null);

  const refEvent = useRef<HTMLDivElement>(null);
  useEffect(() => {
    resetSche();
    switch (changeSchedule) {
      case "spring": {
        refSpring.current!.style.display = "block";
        break;
      }
      case "summer": {
        refSummer.current!.style.display = "block";
        break;
      }
      case "fall": {
        refFall.current!.style.display = "block";
        break;
      }
      case "winter": {
        refWinter.current!.style.display = "block";
        break;
      }
      case "miss": {
        refMiss.current!.style.display = "block";
        break;
      }
      case "marry": {
        refMarry.current!.style.display = "block";
        break;
      }
      default:
        break;
    }
  }, [changeSchedule]);
  useEffect(() => {
    resetFav();
    switch (changeFav) {
      case "love": {
        refLove.current!.style.display = "block";
        break;
      }
      case "like": {
        refLike.current!.style.display = "block";
        break;
      }
      case "normal": {
        refNormal.current!.style.display = "block";
        break;
      }
      case "dislike": {
        refDislike.current!.style.display = "block";
        break;
      }
      case "hate": {
        refHate.current!.style.display = "block";
        break;
      }
      default:
        break;
    }
  }, [changeFav]);
  useEffect(() => {
    refSche.current!.style.display = "none";
    refFav.current!.style.display = "none";
    refEvent.current!.style.display = "none";
    item.schedule.map((items) => {
      if (items.season === "봄") {
        setSpringArray((pushdata) => [...pushdata, items]);
      } else if (items.season === "여름") {
        setSummerArray((pushdata) => [...pushdata, items]);
      } else if (items.season === "가을") {
        setFallArray((pushdata) => [...pushdata, items]);
      } else if (items.season === "겨울") {
        setWinterArray((pushdata) => [...pushdata, items]);
      } else if (items.season === "일탈") {
        setMissArray((pushdata) => [...pushdata, items]);
      } else if (items.season === "결혼") {
        setMarryArray((pushdata) => [...pushdata, items]);
      }
    });
  }, []);
  return (
    <div className="character_wrap" key={index}>
      <div className="item_top">
        <img className="item_img" src={item.portrait} alt="" />
        <p className="item_name">{item.name}</p>
        <p className="item_birth">{item.birth}</p>
      </div>
      <div onClick={scheduleBtn} className="titleWrap">
        <p>하루 일과</p>
        <Button type="primary" icon={<CaretDownOutlined />} />
      </div>
      <div ref={refSche}>
        <ul className="list_title">
          <li
            onClick={() => {
              changeScheType("spring");
            }}
          >
            봄
          </li>
          <li
            onClick={() => {
              changeScheType("summer");
            }}
          >
            여름
          </li>
          <li
            onClick={() => {
              changeScheType("fall");
            }}
          >
            가을
          </li>
          <li
            onClick={() => {
              changeScheType("winter");
            }}
          >
            겨울
          </li>
          <li
            onClick={() => {
              changeScheType("miss");
            }}
          >
            일탈
          </li>
        </ul>
        <div ref={refSpring} className="sectionSpring">
          {springArray.map((item, index) => {
            return (
              <div key={item.title + index} className="springWrap">
                <p className="seasonSpring">{item.title}</p>
                {item.schedule.map((sche, index) => {
                  return (
                    <div key={sche.id + "-" + index}>
                      <p className="scheduleList">
                        <h4>{sche.time}</h4>
                        <h4>{sche.content}</h4>
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div ref={refSummer} className="sectionSummer">
          {summerArray.map((item, index) => {
            return (
              <div key={item.title + index} className="summerWrap">
                <p className="seasonSummer">{item.title}</p>
                {item.schedule.map((sche, index) => {
                  return (
                    <div key={sche.id + "-" + index}>
                      <p className="scheduleList">
                        <h4>{sche.time}</h4>
                        <h4>{sche.content}</h4>
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div ref={refFall} className="sectionFall">
          {fallArray.map((item, index) => {
            return (
              <div key={item.title + index} className="fallWrap">
                <p className="seasonFall">{item.title}</p>
                {item.schedule.map((sche, index) => {
                  return (
                    <div key={sche.id + "-" + index}>
                      <p className="scheduleList">
                        <h4>{sche.time}</h4>
                        <h4>{sche.content}</h4>
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div ref={refWinter} className="sectionWinter">
          {winterArray.map((item, index) => {
            return (
              <div key={item.title + index} className="winterWrap">
                <p className="seasonWinter">{item.title}</p>
                {item.schedule.map((sche, index) => {
                  return (
                    <div key={sche.id + "-" + index}>
                      <p className="scheduleList">
                        <h4>{sche.time}</h4>
                        <h4>{sche.content}</h4>
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div ref={refMiss} className="sectionMiss">
          {missArray.map((item, index) => {
            return (
              <div key={item.title + index} className="missWrap">
                <p className="seasonMiss">{item.title}</p>
                {item.schedule.map((sche, index) => {
                  return (
                    <div key={sche.id + "-" + index}>
                      <p className="scheduleList">
                        <h4>{sche.time}</h4>
                        <h4>{sche.content}</h4>
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div ref={refMarry} className="sectionMarry">
          {marryArray.map((item, index) => {
            return (
              <div key={item.title + index} className="marryWrap">
                <p className="seasonMarry">{item.title}</p>
                {item.schedule.map((sche, index) => {
                  return (
                    <div key={sche.id + "-" + index}>
                      <p className="scheduleList">
                        <h4>{sche.time}</h4>
                        <h4>{sche.content}</h4>
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div onClick={favoriteBtn} className="titleWrap">
          <p>선물</p>
          <Button type="primary" icon={<CaretDownOutlined />} />
        </div>
        <div ref={refFav}>
          <ul className="list_title">
            <li
              onClick={() => {
                changeFavType("love");
              }}
            >
              사랑함
            </li>
            <li
              onClick={() => {
                changeFavType("like");
              }}
            >
              좋아함
            </li>
            <li
              onClick={() => {
                changeFavType("normal");
              }}
            >
              보통
            </li>
            <li
              onClick={() => {
                changeFavType("dislike");
              }}
            >
              싫어함
            </li>
            <li
              onClick={() => {
                changeFavType("hate");
              }}
            >
              혐오함
            </li>
          </ul>
          <div ref={refLove} className="sectionLove">
            {item.favorite.love.map((item, index) => {
              return (
                <div key={index} className="loveWrap">
                  <p className="favoriteList">{item}</p>
                </div>
              );
            })}
          </div>
          <div ref={refLike} className="sectionLike">
            {item.favorite.like.map((item, index) => {
              return (
                <div key={index} className="likeWrap">
                  <p className="favoriteList">{item}</p>
                </div>
              );
            })}
          </div>
          <div ref={refNormal} className="sectionNormal">
            {item.favorite.normal.map((item, index) => {
              return (
                <div key={index} className="normalWrap">
                  <p className="favoriteList">{item}</p>
                </div>
              );
            })}
          </div>
          <div ref={refDislike} className="sectionDislike">
            {item.favorite.dislike.map((item, index) => {
              return (
                <div key={index} className="dislikeWrap">
                  <p className="favoriteList">{item}</p>
                </div>
              );
            })}
          </div>
          <div ref={refHate} className="sectionHate">
            {item.favorite.hate.map((item, index) => {
              return (
                <div key={index} className="hateWrap">
                  <p className="favoriteList">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div onClick={eventBtn} className="titleWrap">
          <p>호감도 이벤트</p>
          <Button type="primary" icon={<CaretDownOutlined />} />
        </div>

        {/* <ul className="list_title">
          {item.event.map((item, index) => {
            const heartCondition = item.condition.split("(");
            return <li key={index}>{heartCondition[0]}</li>;
          })}
        </ul> */}
        <div ref={refEvent}>
          {item.event.map((item, index) => {
            return (
              <div key={index} className={"eventHeart-" + index}>
                <p>{item.condition}</p>
                {item.choice.map((items, index) => {
                  return (
                    <p>
                      {items.content}
                      {items.friendship}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  function changeScheType(condition: string) {
    setChangeSchedule(condition);
  }
  function scheduleBtn() {
    if (refSche.current!.style.display === "block") {
      refSche.current!.style.display = "none";
    } else if (refSche.current!.style.display === "none") {
      refSche.current!.style.display = "block";
    }
  }
  function favoriteBtn() {
    if (refFav.current!.style.display === "block") {
      refFav.current!.style.display = "none";
    } else if (refFav.current!.style.display === "none") {
      refFav.current!.style.display = "block";
    }
  }
  function eventBtn() {
    if (refEvent.current!.style.display === "block") {
      refEvent.current!.style.display = "none";
    } else if (refEvent.current!.style.display === "none") {
      refEvent.current!.style.display = "block";
    }
  }
  function changeFavType(condition: string) {
    setChangeFav(condition);
  }
  function resetSche() {
    refSpring.current!.style.display = "none";
    refSummer.current!.style.display = "none";
    refFall.current!.style.display = "none";
    refWinter.current!.style.display = "none";
    refMiss.current!.style.display = "none";
    refMarry.current!.style.display = "none";
  }
  function resetFav() {
    refLove.current!.style.display = "none";
    refLike.current!.style.display = "none";
    refNormal.current!.style.display = "none";
    refDislike.current!.style.display = "none";
    refHate.current!.style.display = "none";
  }
}
