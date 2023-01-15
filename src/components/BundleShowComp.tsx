import { Space, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../common.scss";
import "../pages/BundleItemPage.scss";
import { useEffect, useRef, useState } from "react";
import { firestore } from "../firebase";
import { collection, DocumentData, getDocs, query } from "firebase/firestore";
import { bundleViewType } from "../types/types";
export default function BundleShowComp() {
  const [bundleButton, setBundleButton] = useState<number>(1);
  const [dataSwitch, setDataSwitch] = useState<boolean>();
  const [springBundleArray, setSpringBundleArray] = useState<bundleViewType[]>(
    []
  );
  const [summerBundleArray, setSummerBundleArray] = useState<bundleViewType[]>(
    []
  );
  const [fallBundleArray, setFallBundleArray] = useState<bundleViewType[]>([]);
  const [winterBundleArray, setWinterBundleArray] = useState<bundleViewType[]>(
    []
  );
  const [specialBundleArray, setSpecialBundleArray] = useState<
    bundleViewType[]
  >([]);
  const [springHarvest, setSpringHarvest] = useState<bundleViewType[]>([]);
  const [summerHarvest, setSummerHarvest] = useState<bundleViewType[]>([]);
  const [fallHarvest, setFallHarvest] = useState<bundleViewType[]>([]);
  const [qualityHarvest, setQualityHarvest] = useState<bundleViewType[]>([]);
  const [masterHarvest, setMasterHarvest] = useState<bundleViewType[]>([]);
  const [riverFish, setRiverFish] = useState<bundleViewType[]>([]);
  const [lakeFish, setLakeFish] = useState<bundleViewType[]>([]);
  const [oceanFish, setOceanFish] = useState<bundleViewType[]>([]);
  const [nightFish, setNightFish] = useState<bundleViewType[]>([]);
  const [crabPot, setCrabPot] = useState<bundleViewType[]>([]);
  const [specialtyFish, setSpecialtyFish] = useState<bundleViewType[]>([]);
  const [blacksmith, setBlacksmith] = useState<bundleViewType[]>([]);
  const [geologist, setGeologist] = useState<bundleViewType[]>([]);
  const [adventurer, setAdventurer] = useState<bundleViewType[]>([]);
  const [chef, setChef] = useState<bundleViewType[]>([]);
  const [dye, setDye] = useState<bundleViewType[]>([]);
  const [fieldResearch, setFieldResearch] = useState<bundleViewType[]>([]);
  const [fodder, setFodder] = useState<bundleViewType[]>([]);
  const [enchanter, setEnchanter] = useState<bundleViewType[]>([]);
  const [safe2500, setSafe2500] = useState<bundleViewType[]>([]);
  const [safe5000, setSafe5000] = useState<bundleViewType[]>([]);
  const [safe10000, setSafe10000] = useState<bundleViewType[]>([]);
  const [safe25000, setSafe25000] = useState<bundleViewType[]>([]);
  const [joja, setJoja] = useState<bundleViewType[]>([]);

  const bundleRef1 = useRef<HTMLLIElement>(null);
  const bundleRef2 = useRef<HTMLLIElement>(null);
  const bundleRef3 = useRef<HTMLLIElement>(null);
  const bundleRef4 = useRef<HTMLLIElement>(null);
  const bundleRef5 = useRef<HTMLLIElement>(null);
  const bundleRef6 = useRef<HTMLLIElement>(null);
  const bundleRef7 = useRef<HTMLLIElement>(null);
  const listtRef = useRef<HTMLDivElement>(null);
  const CraftRoom = useRef<HTMLDivElement>(null);
  const Pantry = useRef<HTMLDivElement>(null);
  const Fishbowl = useRef<HTMLDivElement>(null);
  const BoilerRoom = useRef<HTMLDivElement>(null);
  const NoticeBoard = useRef<HTMLDivElement>(null);
  const Safe = useRef<HTMLDivElement>(null);
  const JojaMart = useRef<HTMLDivElement>(null);

  useEffect(() => {
    collectBundle();
    harvestBundle();
    fishBundle();
    mineralBundle();
    cookBundle();
    etcBundle();
  }, []);
  useEffect(() => {
    resetBundle();
    switch (bundleButton) {
      case 1: {
        bundleRef1.current!.style.fontWeight = "700";
        bundleRef1.current!.style.border = "1px solid #FF8989";
        listtRef.current!.style.backgroundColor = "#FFE4E4";
        listtRef.current!.style.border = "1px solid #FF8989";
        CraftRoom.current!.style.display = "block";
        break;
      }
      case 2: {
        bundleRef2.current!.style.fontWeight = "700";
        bundleRef2.current!.style.border = "1px solid #E6AB5E";
        listtRef.current!.style.backgroundColor = "#FFF2E4";
        listtRef.current!.style.border = "1px solid #E6AB5E";
        Pantry.current!.style.display = "block";

        break;
      }
      case 3: {
        bundleRef3.current!.style.fontWeight = "700";
        bundleRef3.current!.style.border = "1px solid #E6D85E";
        listtRef.current!.style.backgroundColor = "#FDFFE4";
        listtRef.current!.style.border = "1px solid #E6D85E";
        Fishbowl.current!.style.display = "block";

        break;
      }
      case 4: {
        bundleRef4.current!.style.fontWeight = "700";
        bundleRef4.current!.style.border = "1px solid #5EE68B";
        listtRef.current!.style.backgroundColor = "#BEFFAE";
        listtRef.current!.style.border = "1px solid #5EE68B";
        BoilerRoom.current!.style.display = "block";

        break;
      }
      case 5: {
        bundleRef5.current!.style.fontWeight = "700";
        bundleRef5.current!.style.border = "1px solid #5ED3E6";
        listtRef.current!.style.backgroundColor = "#E4FEFF";
        listtRef.current!.style.border = "1px solid #5ED3E6";
        NoticeBoard.current!.style.display = "block";

        break;
      }
      case 6: {
        bundleRef6.current!.style.fontWeight = "700";
        bundleRef6.current!.style.border = "1px solid #5E90E6";
        listtRef.current!.style.backgroundColor = "#A2C5FF";
        listtRef.current!.style.border = "1px solid #5E90E6";
        Safe.current!.style.display = "block";

        break;
      }
      case 7: {
        bundleRef7.current!.style.fontWeight = "700";
        bundleRef7.current!.style.border = "1px solid #A55EE6";
        listtRef.current!.style.backgroundColor = "#DDA2FF";
        listtRef.current!.style.border = "1px solid #A55EE6";
        JojaMart.current!.style.display = "block";

        break;
      }

      default:
        break;
    }
  }, [bundleButton]);

  useEffect(() => {
    if (dataSwitch === true) {
    }
  }, [dataSwitch]);
  return (
    <section className="page_wrap">
      <div className="inner">
        <ul className="list_title">
          <li
            ref={bundleRef1}
            onClick={() => {
              changeBundle(1);
            }}
          >
            공예실
          </li>
          <li
            ref={bundleRef2}
            onClick={() => {
              changeBundle(2);
            }}
          >
            식료품 저장실
          </li>
          <li
            ref={bundleRef3}
            onClick={() => {
              changeBundle(3);
            }}
          >
            어항
          </li>
          <li
            ref={bundleRef4}
            onClick={() => {
              changeBundle(4);
            }}
          >
            보일러실
          </li>
          <li
            ref={bundleRef5}
            onClick={() => {
              changeBundle(5);
            }}
          >
            게시판
          </li>
          <li
            ref={bundleRef6}
            onClick={() => {
              changeBundle(6);
            }}
          >
            금고
          </li>
          <li
            ref={bundleRef7}
            onClick={() => {
              changeBundle(7);
            }}
          >
            조지마트
          </li>
        </ul>
        <div ref={listtRef} className="list_wrap">
          <div ref={CraftRoom}>
            {bundleViewer(
              "봄 채집 꾸러미",
              springBundleArray,
              "봄 씨앗 모음 30"
            )}
            {bundleViewer(
              "여름 채집 꾸러미",
              summerBundleArray,
              "여름 씨앗 모음 30"
            )}
            {bundleViewer(
              "가을 채집 꾸러미",
              fallBundleArray,
              "가을 씨앗 모음 30"
            )}
            {bundleViewer(
              "겨울 채집 꾸러미",
              winterBundleArray,
              "겨울 씨앗 모음 30"
            )}
            {bundleViewer(
              "특수 채집 꾸러미",
              specialBundleArray,
              "가을의 수확 5",

              5
            )}
          </div>
          <div ref={Pantry}>
            {bundleViewer("봄 작물 꾸러미", springHarvest, "성장촉진제 20")}
            {bundleViewer(
              "여름 작물 꾸러미",
              summerHarvest,
              "고급스프링클러 20"
            )}
            {bundleViewer("가을 작물 꾸러미", fallHarvest, "양봉장")}
            {bundleViewer("고급 작물 꾸러미", qualityHarvest, "절임통")}
            {bundleViewer("장인 꾸러미", masterHarvest, "술통", 6)}
          </div>
          <div ref={Fishbowl}>
            {bundleViewer("강 물고기 꾸러미", riverFish, "미끼 30")}
            {bundleViewer("호수 물고기 꾸러미", lakeFish, "꾸며진 회전식 미끼")}
            {bundleViewer("바다 물고기 꾸러미", oceanFish, "워프 토템: 해변 5")}
            {bundleViewer("밤 물고기 꾸러미", nightFish, "작은빛 반지")}
            {bundleViewer("게잡이 통발 꾸러미", crabPot, "게잡이 통발 3")}
            {bundleViewer("특수 물고기 꾸러미", specialtyFish, "바다의 요리 5")}
          </div>
          <div ref={BoilerRoom}>
            {bundleViewer("대장장이 꾸러미", blacksmith, "용광로")}
            {bundleViewer("지질학자 꾸러미", geologist, "전 정동석")}
            {bundleViewer("모험가 꾸러미", adventurer, "작은자석 반지")}
          </div>
          <div ref={NoticeBoard}>
            {bundleViewer("요리사 꾸러미", chef, "핑크 케이크 3")}
            {bundleViewer("염료 꾸러미", dye, "씨앗 생성기")}
            {bundleViewer("현장 조사원 꾸러미", fieldResearch, "재활용 기계")}
            {bundleViewer("사료 꾸러미", fodder, "히터")}
            {bundleViewer("마법사 꾸러미", enchanter, "금 주괴 5")}
          </div>
          <div ref={Safe}>
            {bundleViewer("2500 꾸러미", safe2500, "초콜릿 케이크 3")}
            {bundleViewer("5000 꾸러미", safe5000, "고급 비료 30")}
            {bundleViewer("10000 꾸러미", safe10000, "피뢰침")}
            {bundleViewer("25000 꾸러미", safe25000, "결정생성기")}
          </div>
          <div ref={JojaMart}>
            {bundleViewer("잃어버린 꾸러미", joja, "영화관")}
          </div>
        </div>
      </div>
    </section>
  );
  function changeBundle(num: number) {
    setBundleButton(num);
  }
  function resetBundle() {
    bundleRef1.current!.style.fontWeight = "400";
    bundleRef1.current!.style.border = "1px solid #b2b2b2";
    bundleRef2.current!.style.fontWeight = "400";
    bundleRef2.current!.style.border = "1px solid #b2b2b2";
    bundleRef3.current!.style.fontWeight = "400";
    bundleRef3.current!.style.border = "1px solid #b2b2b2";
    bundleRef4.current!.style.fontWeight = "400";
    bundleRef4.current!.style.border = "1px solid #b2b2b2";
    bundleRef5.current!.style.fontWeight = "400";
    bundleRef5.current!.style.border = "1px solid #b2b2b2";
    bundleRef6.current!.style.fontWeight = "400";
    bundleRef6.current!.style.border = "1px solid #b2b2b2";
    bundleRef7.current!.style.fontWeight = "400";
    bundleRef7.current!.style.border = "1px solid #b2b2b2";
    CraftRoom.current!.style.display = "none";
    Pantry.current!.style.display = "none";
    BoilerRoom.current!.style.display = "none";
    Fishbowl.current!.style.display = "none";
    NoticeBoard.current!.style.display = "none";
    Safe.current!.style.display = "none";
    JojaMart.current!.style.display = "none";
  }
  function collectBundle() {
    const Plant = "images/Plant/";
    const q = query(
      firestore.collection("Resource/Object/Plant")
      // .where("purpose", "array-contains", "봄 채집 꾸러미")
    );
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: bundleViewType = {
          name: data.name,
          portrait: Plant + data.portrait,
          explain: data.explain,
        };
        if (data.purpose.includes("봄 채집 꾸러미")) {
          setSpringBundleArray((bundle) => [...bundle, pushdata]);
        } else if (data.purpose.includes("여름 채집 꾸러미")) {
          setSummerBundleArray((bundle) => [...bundle, pushdata]);
        } else if (data.purpose.includes("가을 채집 꾸러미")) {
          setFallBundleArray((bundle) => [...bundle, pushdata]);
        } else if (data.purpose.includes("겨울 채집 꾸러미")) {
          setWinterBundleArray((bundle) => [...bundle, pushdata]);
        } else if (data.purpose.includes("특수 채집 꾸러미")) {
          setSpecialBundleArray((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("장인 꾸러미")) {
          setMasterHarvest((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("요리사 꾸러미")) {
          setChef((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("염료 꾸러미")) {
          setDye((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("현장 연구 꾸러미")) {
          setFieldResearch((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("사료 꾸러미")) {
          setFodder((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("마법사 꾸러미")) {
          setEnchanter((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("잃어버린 꾸러미")) {
          setJoja((bundle) => [...bundle, pushdata]);
        }
      });
      setDataSwitch(true);
    });
  }
  function harvestBundle() {
    const Harvest = "images/Harvest/";
    const Product = "images/Product/";
    const q = query(firestore.collection("Resource/Object/Harvest"));
    const q2 = query(firestore.collection("Resource/Object/Product"));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: bundleViewType = {
          name: data.name,
          portrait: Harvest + data.portrait,
          explain: data.explain,
        };
        if (data.purpose.includes("봄 작물 꾸러미")) {
          setSpringHarvest((bundle) => [...bundle, pushdata]);
        } else if (data.purpose.includes("여름 작물 꾸러미")) {
          setSummerHarvest((bundle) => [...bundle, pushdata]);
        } else if (data.purpose.includes("가을 작물 꾸러미")) {
          setFallHarvest((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("고급 작물 꾸러미")) {
          setQualityHarvest((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("요리사 꾸러미")) {
          setChef((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("염료 꾸러미")) {
          setDye((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("현장 연구 꾸러미")) {
          setFieldResearch((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("사료 꾸러미")) {
          setFodder((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("마법사 꾸러미")) {
          setEnchanter((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("잃어버린 꾸러미")) {
          setJoja((bundle) => [...bundle, pushdata]);
        }
      });
      setDataSwitch(true);
    });
    getDocs(q2).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: bundleViewType = {
          name: data.name,
          portrait: Product + data.portrait,
          explain: data.explain,
        };
        if (data.purpose.includes("장인 꾸러미")) {
          setMasterHarvest((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("요리사 꾸러미")) {
          setChef((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("염료 꾸러미")) {
          setDye((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("현장 연구 꾸러미")) {
          setFieldResearch((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("사료 꾸러미")) {
          setFodder((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("마법사 꾸러미")) {
          setEnchanter((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("잃어버린 꾸러미")) {
          setJoja((bundle) => [...bundle, pushdata]);
        }
      });
      setDataSwitch(true);
    });
  }
  function fishBundle() {
    const Fish = "images/Fish/";
    const q = query(
      firestore.collection("Resource/Object/Fish")
      // .where("purpose", "array-contains", "봄 채집 꾸러미")
    );
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: bundleViewType = {
          name: data.name,
          portrait: Fish + data.portrait,
          explain: data.season + data.location + data.time,
        };
        if (data.purpose.includes("강 물고기 꾸러미")) {
          setRiverFish((bundle) => [...bundle, pushdata]);
        } else if (data.purpose.includes("호수 물고기 꾸러미")) {
          setLakeFish((bundle) => [...bundle, pushdata]);
        } else if (data.purpose.includes("바다 물고기 꾸러미")) {
          setOceanFish((bundle) => [...bundle, pushdata]);
        } else if (data.purpose.includes("밤 물고기 꾸러미")) {
          setNightFish((bundle) => [...bundle, pushdata]);
        } else if (data.purpose.includes("게잡이 통발 꾸러미")) {
          setCrabPot((bundle) => [...bundle, pushdata]);
        } else if (data.purpose.includes("특수 물고기 꾸러미")) {
          setSpecialtyFish((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("염료 꾸러미")) {
          setDye((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("현장 연구 꾸러미")) {
          setFieldResearch((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("사료 꾸러미")) {
          setFodder((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("마법사 꾸러미")) {
          setEnchanter((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("잃어버린 꾸러미")) {
          setJoja((bundle) => [...bundle, pushdata]);
        }
      });
      setDataSwitch(true);
    });
  }
  function mineralBundle() {
    const Mineral = "images/Mineral/";
    const q = query(firestore.collection("Resource/Object/Mineral"));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: bundleViewType = {
          name: data.name,
          portrait: Mineral + data.portrait,
          explain: data.explain,
        };
        if (data.purpose.includes("대장장이 꾸러미")) {
          setBlacksmith((bundle) => [...bundle, pushdata]);
        } else if (data.purpose.includes("지질학자 꾸러미")) {
          setGeologist((bundle) => [...bundle, pushdata]);
        } else if (data.purpose.includes("모험가 꾸러미")) {
          setAdventurer((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("염료 꾸러미")) {
          setDye((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("현장 연구 꾸러미")) {
          setFieldResearch((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("사료 꾸러미")) {
          setFodder((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("마법사 꾸러미")) {
          setEnchanter((bundle) => [...bundle, pushdata]);
        }
        if (data.purpose.includes("잃어버린 꾸러미")) {
          setJoja((bundle) => [...bundle, pushdata]);
        }
      });
      setDataSwitch(true);
    });
  }
  function etcBundle() {
    const Etc = "images/Etc/";
    const q = query(firestore.collection("Resource/Object/Etc"));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: bundleViewType = {
          name: data.name,
          portrait: Etc + data.portrait,
          explain: data.explain,
        };
        if (data.purpose.includes("2500 꾸러미")) {
          setSafe2500((bundle) => [...bundle, pushdata]);
        } else if (data.purpose.includes("5000 꾸러미")) {
          setSafe5000((bundle) => [...bundle, pushdata]);
        } else if (data.purpose.includes("10000 꾸러미")) {
          setSafe10000((bundle) => [...bundle, pushdata]);
        } else if (data.purpose.includes("25000 꾸러미")) {
          setSafe25000((bundle) => [...bundle, pushdata]);
        }
      });
      setDataSwitch(true);
    });
  }
  function cookBundle() {
    const Food = "images/Food/";
    const q = query(firestore.collection("Resource/Object/Food"));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data: DocumentData = doc.data();
        let pushdata: bundleViewType = {
          name: data.name,
          portrait: Food + data.portrait,
          explain: data.explain,
        };
        if (data.purpose.includes("요리사 꾸러미")) {
          setChef((bundle) => [...bundle, pushdata]);
        }
      });
      setDataSwitch(true);
    });
  }
  function bundleViewer(
    bundleTitle: string,
    bundleName: bundleViewType[],
    bundleReward: string,
    bundleNum: number = bundleName.length
  ) {
    return (
      <div className="content_wrap">
        <div>{bundleTitle}</div>
        <div className="slot_wrap">{forBtnSlot(bundleNum)}</div>
        <div className="table_wrap">
          <div className="table_title">
            <h4>이름</h4>
            <h4>획득처</h4>
          </div>
          <ul className="table_content_list">
            {bundleName.map((item) => {
              return (
                <li key={item.portrait}>
                  <img className="item_img" src={item.portrait} alt="" />
                  <p className="item_name">{item.name}</p>
                  <p className="item_obtain">{item.explain}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="reward_wrap">
          <p>보상</p>
          <div>img {bundleReward}</div>
        </div>
      </div>
    );
  }
  function forBtnSlot(num: number) {
    let arr = [];
    {
      for (let index = 0; index < num; index++) {
        arr.push(<div className="btn_slot" />);
      }
    }
    return arr;
  }
}
