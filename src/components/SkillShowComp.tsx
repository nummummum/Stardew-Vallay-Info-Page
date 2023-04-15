import { useState, useRef, useEffect } from "react";
import "./SkillShowComp.scss";

export default function SkillShowComp() {
  const [bundleButton, setBundleButton] = useState<number>(1);
  const [dataSwitch, setDataSwitch] = useState<boolean>();
  const bundleRef1 = useRef<HTMLLIElement>(null);
  const bundleRef2 = useRef<HTMLLIElement>(null);
  const bundleRef3 = useRef<HTMLLIElement>(null);
  const bundleRef4 = useRef<HTMLLIElement>(null);
  const bundleRef5 = useRef<HTMLLIElement>(null);
  const listtRef = useRef<HTMLDivElement>(null);
  const harvestRef = useRef<HTMLDivElement>(null);
  const mineralRef = useRef<HTMLDivElement>(null);
  const plantRef = useRef<HTMLDivElement>(null);
  const fishRef = useRef<HTMLDivElement>(null);
  const battleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    resetBundle();
    switch (bundleButton) {
      case 1: {
        bundleRef1.current!.style.fontWeight = "700";
        bundleRef1.current!.style.border = "1px solid #FF8989";
        listtRef.current!.style.backgroundColor = "#FFE4E4";
        listtRef.current!.style.border = "1px solid #FF8989";
        harvestRef.current!.style.display = "block";
        break;
      }
      case 2: {
        bundleRef2.current!.style.fontWeight = "700";
        bundleRef2.current!.style.border = "1px solid #E6AB5E";
        listtRef.current!.style.backgroundColor = "#FFF2E4";
        listtRef.current!.style.border = "1px solid #E6AB5E";
        mineralRef.current!.style.display = "block";

        break;
      }
      case 3: {
        bundleRef3.current!.style.fontWeight = "700";
        bundleRef3.current!.style.border = "1px solid #E6D85E";
        listtRef.current!.style.backgroundColor = "#FDFFE4";
        listtRef.current!.style.border = "1px solid #E6D85E";
        plantRef.current!.style.display = "block";

        break;
      }
      case 4: {
        bundleRef4.current!.style.fontWeight = "700";
        bundleRef4.current!.style.border = "1px solid #5EE68B";
        listtRef.current!.style.backgroundColor = "#BEFFAE";
        listtRef.current!.style.border = "1px solid #5EE68B";
        fishRef.current!.style.display = "block";

        break;
      }
      case 5: {
        bundleRef5.current!.style.fontWeight = "700";
        bundleRef5.current!.style.border = "1px solid #5ED3E6";
        listtRef.current!.style.backgroundColor = "#E4FEFF";
        listtRef.current!.style.border = "1px solid #5ED3E6";
        battleRef.current!.style.display = "block";

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
            농사
          </li>
          <li
            ref={bundleRef2}
            onClick={() => {
              changeBundle(2);
            }}
          >
            채광
          </li>
          <li
            ref={bundleRef3}
            onClick={() => {
              changeBundle(3);
            }}
          >
            채집
          </li>
          <li
            ref={bundleRef4}
            onClick={() => {
              changeBundle(4);
            }}
          >
            낚시
          </li>
          <li
            ref={bundleRef5}
            onClick={() => {
              changeBundle(5);
            }}
          >
            전투
          </li>
        </ul>
        <div ref={listtRef} className="list_wrap">
          <div ref={harvestRef} className="skill_wrap">
            <div className="content_wrap">
              <h3 className="skill_title">주요스킬</h3>
              <p className="skill_level">5 레벨</p>
              <ul>
                <li className="skill_list">
                  <p className="skill_detail_name a">목축업자</p>
                  <p className="skill_detail_content">
                    동물 제작품 가치 20% 상승
                  </p>
                </li>
                <li className="skill_list">
                  <p className="skill_detail_name b">경작인</p>
                  <p className="skill_detail_content">작물 가치 10% 상승</p>
                </li>
              </ul>
              <p className="skill_level a">10 레벨 - 목축업자</p>
              <ul>
                <li className="skill_list">
                  <p className="skill_detail_name">닭장의 달인</p>
                  <p className="skill_detail_content">
                    부화 시간이 절반으로 줆
                  </p>
                </li>
                <li className="skill_list">
                  <p className="skill_detail_name">양치기</p>
                  <p className="skill_detail_content">
                    양들이 양털을 더 빨리 생산
                  </p>
                </li>
              </ul>
              <p className="skill_level b">10 레벨 - 경작인</p>
              <ul>
                <li className="skill_list">
                  <p className="skill_detail_name">장인</p>
                  <p className="skill_detail_content">
                    장인 생산품 (와인, 치즈, 기름, 기타 등등.) 의 가치가 40%
                    증가합니다.
                  </p>
                </li>
                <li className="skill_list">
                  <p className="skill_detail_name">농업 전문가</p>
                  <p className="skill_detail_content">
                    모든 작물이 10% 빨리 자란다.
                  </p>
                </li>
              </ul>
              <h3 className="skill_title">레벨 별 스킬</h3>
              <ul className="receipt_wrap">
                <li>
                  <h4 className="receipt_reqlv">1 레벨</h4>
                  <p className="receipt_product">허수아비</p>
                  <p className="receipt_product">기본 비료</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">2 레벨</h4>
                  <p className="receipt_product">마요네즈 기계</p>
                  <p className="receipt_product">돌 울타리</p>
                  <p className="receipt_product">스프링쿨러</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">3 레벨</h4>
                  <p className="receipt_product">양봉장</p>
                  <p className="receipt_product">성장 촉진제</p>
                  <p className="receipt_product">농부의 점심</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">4 레벨</h4>
                  <p className="receipt_product">절임통</p>
                  <p className="receipt_product">기본 보습 토양</p>
                  <p className="receipt_product">철 울타리</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">5 레벨</h4>
                  <p className="receipt_product">스킬 - 목축업자</p>
                  <p className="receipt_product">스킬 - 경작인</p>
                </li>
              </ul>
              <ul className="receipt_wrap">
                <li>
                  <h4 className="receipt_reqlv">6 레벨</h4>
                  <p className="receipt_product">치즈 착제기</p>
                  <p className="receipt_product">단단한 나무 울타리</p>
                  <p className="receipt_product">고급 스프링쿨러</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">7 레벨</h4>
                  <p className="receipt_product">물레</p>
                  <p className="receipt_product">고급 보습 토양</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">8 레벨</h4>
                  <p className="receipt_product">착유기</p>
                  <p className="receipt_product">술통</p>
                  <p className="receipt_product">디럭스 성장 촉진제</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">9 레벨</h4>
                  <p className="receipt_product">씨앗 생성기</p>
                  <p className="receipt_product">이리듐 스프링쿨러</p>
                  <p className="receipt_product">고급 비료</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">10 레벨</h4>
                  <p className="receipt_product">스킬 - 목축업자 2</p>
                  <p className="receipt_product">스킬 - 경작인 2</p>
                </li>
              </ul>
            </div>
          </div>
          <div ref={mineralRef} className="skill_wrap">
            <div className="content_wrap">
              <h3 className="skill_title">주요스킬</h3>
              <p className="skill_level">5 레벨</p>
              <ul>
                <li className="skill_list">
                  <p className="skill_detail_name a">광부</p>
                  <p className="skill_detail_content">
                    광맥마다 광물이 하나씩 더 나옵니다. (구리, 철, 금, 이리듐
                    광맥에 적용.)
                  </p>
                </li>
                <li className="skill_list">
                  <p className="skill_detail_name b">지질학자</p>
                  <p className="skill_detail_content">
                    보석, 정동석을 두 개씩 발견할 확률이 생깁니다. (50%)
                  </p>
                </li>
              </ul>
              <p className="skill_level a">10 레벨 - 광부</p>
              <ul>
                <li className="skill_list">
                  <p className="skill_detail_name">대장장이</p>
                  <p className="skill_detail_content">
                    주괴의 가치가 50%가 증가합니다.
                  </p>
                </li>
                <li className="skill_list">
                  <p className="skill_detail_name">탐광자</p>
                  <p className="skill_detail_content">
                    석탄 발견 확률이 두배가 됩니다.
                  </p>
                </li>
              </ul>
              <p className="skill_level b">10 레벨 - 지질학자</p>
              <ul>
                <li className="skill_list">
                  <p className="skill_detail_name">발굴자</p>
                  <p className="skill_detail_content">
                    정동석 발견 확률이 두배가 됩니다.
                  </p>
                </li>
                <li className="skill_list">
                  <p className="skill_detail_name">보석학자</p>
                  <p className="skill_detail_content">
                    보석의 가치가 30% 증가합니다.
                  </p>
                </li>
              </ul>
              <h3 className="skill_title">레벨 별 스킬</h3>
              <ul className="receipt_wrap">
                <li>
                  <h4 className="receipt_reqlv">1 레벨</h4>
                  <p className="receipt_product">체리 폭탄</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">2 레벨</h4>
                  <p className="receipt_product">계단</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">3 레벨</h4>
                  <p className="receipt_product">광부의 간식</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">4 레벨</h4>
                  <p className="receipt_product">철 변환</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">5 레벨</h4>
                  <p className="receipt_product">스킬 - 광부</p>
                  <p className="receipt_product">스킬 - 지질학자</p>
                </li>
              </ul>
              <ul className="receipt_wrap">
                <li>
                  <h4 className="receipt_reqlv">6 레벨</h4>
                  <p className="receipt_product">폭탄</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">7 레벨</h4>
                  <p className="receipt_product">금 변환</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">8 레벨</h4>
                  <p className="receipt_product">거대 폭탄</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">9 레벨</h4>
                  <p className="receipt_product">결정생성기</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">10 레벨</h4>
                  <p className="receipt_product">스킬 - 광부 2</p>
                  <p className="receipt_product">스킬 - 지질학자 2</p>
                </li>
              </ul>
            </div>
          </div>
          <div ref={plantRef} className="skill_wrap">
            <div className="content_wrap">
              <h3 className="skill_title">주요스킬</h3>
              <p className="skill_level">5 레벨</p>
              <ul>
                <li className="skill_list">
                  <p className="skill_detail_name a">수목 관리원</p>
                  <p className="skill_detail_content">
                    나무를 자를 때 목재를 25% 더 얻습니다.
                  </p>
                </li>
                <li className="skill_list">
                  <p className="skill_detail_name b">채집가</p>
                  <p className="skill_detail_content">
                    채집 시 아이템을 두 배 얻을 확률이 생깁니다.
                  </p>
                </li>
              </ul>
              <p className="skill_level a">10 레벨 - 수목 관리원</p>
              <ul>
                <li className="skill_list">
                  <p className="skill_detail_name">벌목꾼</p>
                  <p className="skill_detail_content">
                    모든 나무에서 단단한 나무를 얻을 확률이 생깁니다.
                  </p>
                </li>
                <li className="skill_list">
                  <p className="skill_detail_name">수액 채취자</p>
                  <p className="skill_detail_content">
                    시럽류의 가치가 25% 증가합니다.
                  </p>
                </li>
              </ul>
              <p className="skill_level b">10 레벨 - 채집가</p>
              <ul>
                <li className="skill_list">
                  <p className="skill_detail_name">식물학자</p>
                  <p className="skill_detail_content">
                    채집 시 최고 품질의 아이템만 발견합니다.
                  </p>
                </li>
                <li className="skill_list">
                  <p className="skill_detail_name">추적자</p>
                  <p className="skill_detail_content">
                    채집 가능한 아이템의 위치를 보여줍니다.
                  </p>
                </li>
              </ul>
              <h3 className="skill_title">레벨 별 스킬</h3>
              <ul className="receipt_wrap">
                <li>
                  <h4 className="receipt_reqlv">1 레벨</h4>
                  <p className="receipt_product">봄 씨앗 모음</p>
                  <p className="receipt_product">수제 에너지바</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">2 레벨</h4>
                  <p className="receipt_product">생존형 버거</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">3 레벨</h4>
                  <p className="receipt_product">수액 채취기</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">4 레벨</h4>
                  <p className="receipt_product">숯 가마</p>
                  <p className="receipt_product">여름 씨앗 모음</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">5 레벨</h4>
                  <p className="receipt_product">스킬 - 수목 관리원</p>
                  <p className="receipt_product">스킬 - 채집가</p>
                </li>
              </ul>
              <ul className="receipt_wrap">
                <li>
                  <h4 className="receipt_reqlv">6 레벨</h4>
                  <p className="receipt_product">피뢰침</p>
                  <p className="receipt_product">가을 씨앗 모음</p>
                  <p className="receipt_product">워프 토템: 해변</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">7 레벨</h4>
                  <p className="receipt_product">겨울 씨앗 모음</p>
                  <p className="receipt_product">워프 토템: 산</p>
                  <p className="receipt_product">나무용 비료</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">8 레벨</h4>
                  <p className="receipt_product">워프 토템: 농장</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">9 레벨</h4>
                  <p className="receipt_product">비의 토템</p>
                  <p className="receipt_product">야외 요리 키트</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">10 레벨</h4>
                  <p className="receipt_product">스킬 - 수목 관리원 2</p>
                  <p className="receipt_product">스킬 - 채집가 2</p>
                </li>
              </ul>
            </div>
          </div>
          <div ref={fishRef} className="skill_wrap">
            <div className="content_wrap">
              <h3 className="skill_title">주요스킬</h3>
              <p className="skill_level">5 레벨</p>
              <ul>
                <li className="skill_list">
                  <p className="skill_detail_name a">어부</p>
                  <p className="skill_detail_content">
                    생선의 가치가 25% 증가합니다.
                  </p>
                </li>
                <li className="skill_list">
                  <p className="skill_detail_name b">덫 사냥꾼</p>
                  <p className="skill_detail_content">
                    통발을 제작하는데 드는 자원이 줄어듭니다.
                  </p>
                </li>
              </ul>
              <p className="skill_level a">10 레벨 - 어부</p>
              <ul>
                <li className="skill_list">
                  <p className="skill_detail_name">낚시장인</p>
                  <p className="skill_detail_content">
                    생선의 가치가 50% 증가합니다
                  </p>
                </li>
                <li className="skill_list">
                  <p className="skill_detail_name">해적</p>
                  <p className="skill_detail_content">
                    보물을 찾을 확률이 두 배로 늘어납니다.
                  </p>
                </li>
              </ul>
              <p className="skill_level b">10 레벨 - 덫 사냥꾼</p>
              <ul>
                <li className="skill_list">
                  <p className="skill_detail_name">뱃사람</p>
                  <p className="skill_detail_content">
                    게잡이 통발이 쓰레기를 잡지 않습니다.
                  </p>
                </li>
                <li className="skill_list">
                  <p className="skill_detail_name">미끼장인</p>
                  <p className="skill_detail_content">
                    게잡이 통발이 미끼 없이 사용 가능합니다.
                  </p>
                </li>
              </ul>
              <h3 className="skill_title">레벨 별 스킬</h3>
              <ul className="receipt_wrap">
                <li>
                  <h4 className="receipt_reqlv">1 레벨</h4>
                  <p className="receipt_product">던질 수 있는 거리 증가</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">2 레벨</h4>
                  <p className="receipt_product">미끼</p>
                  <p className="receipt_product">
                    생선 가게에서 섬유 유리 낚싯대 & 미끼 해금
                  </p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">3 레벨</h4>
                  <p className="receipt_product">게잡이 통발</p>
                  <p className="receipt_product">바다의 요리</p>
                  <p className="receipt_product">
                    생선 가게에서 게잡이 통발 해금
                  </p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">4 레벨</h4>
                  <p className="receipt_product">재활용 기계</p>
                  <p className="receipt_product">던질 수 있는 거리 증가</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">5 레벨</h4>
                  <p className="receipt_product">스킬 - 어부</p>
                  <p className="receipt_product">스킬 - 덫 사냥꾼</p>
                </li>
              </ul>
              <ul className="receipt_wrap">
                <li>
                  <h4 className="receipt_reqlv">6 레벨</h4>
                  <p className="receipt_product">회전식 미끼</p>
                  <p className="receipt_product">함정 찌</p>
                  <p className="receipt_product">
                    생선 가게에서 이리듐 낚싯대, 찌, 미끼 해금
                  </p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">7 레벨</h4>
                  <p className="receipt_product">코르크 찌</p>
                  <p className="receipt_product">보물사냥꾼</p>
                  <p className="receipt_product">
                    생선 가게에서 찌 & 보물사냥꾼 해금
                  </p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">8 레벨</h4>
                  <p className="receipt_product">지렁이 통</p>
                  <p className="receipt_product">가시 돋친 낚시바늘</p>
                  <p className="receipt_product">꾸며진 회전식 미끼</p>
                  <p className="receipt_product">
                    생선 가게에서 낚시바늘 & 미끼 해금
                  </p>
                  <p className="receipt_product">던질 수 있는 거리 증가</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">9 레벨</h4>
                  <p className="receipt_product">자석</p>
                  <p className="receipt_product">생선 가게에서 자석 해금</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">10 레벨</h4>
                  <p className="receipt_product">스킬 - 어부 2</p>
                  <p className="receipt_product">스킬 - 덫 사냥꾼 2</p>
                </li>
              </ul>
            </div>
          </div>
          <div ref={battleRef} className="skill_wrap">
            <div className="content_wrap">
              <h3 className="skill_title">주요스킬</h3>
              <p className="skill_level">5 레벨</p>
              <ul>
                <li className="skill_list">
                  <p className="skill_detail_name a">싸움꾼</p>
                  <p className="skill_detail_content">
                    모든 공격의 데미지가 10% 증가합니다.
                  </p>
                </li>
                <li className="skill_list">
                  <p className="skill_detail_name b">정찰병</p>
                  <p className="skill_detail_content">
                    치명타 확률이 50% 증가합니다.
                  </p>
                </li>
              </ul>
              <p className="skill_level a">10 레벨 - 싸움꾼</p>
              <ul>
                <li className="skill_list">
                  <p className="skill_detail_name">덩치</p>
                  <p className="skill_detail_content">
                    데미지가 15% 증가합니다.
                  </p>
                </li>
                <li className="skill_list">
                  <p className="skill_detail_name">수호자</p>
                  <p className="skill_detail_content">체력 +25.</p>
                </li>
              </ul>
              <p className="skill_level b">10 레벨 - 정찰병</p>
              <ul>
                <li className="skill_list">
                  <p className="skill_detail_name">곡예사</p>
                  <p className="skill_detail_content">
                    특수 공격의 재사용 대기시간이 반으로 감소합니다.
                  </p>
                </li>
                <li className="skill_list">
                  <p className="skill_detail_name">무법자</p>
                  <p className="skill_detail_content">
                    치명타의 위력이 크게 증가합니다.
                  </p>
                </li>
              </ul>
              <h3 className="skill_title">레벨 별 스킬</h3>
              <ul className="receipt_wrap">
                <li>
                  <h4 className="receipt_reqlv">1 레벨</h4>
                  <p className="receipt_product">튼튼한 반지</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">2 레벨</h4>
                  <p className="receipt_product">생명의 영약</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">3 레벨</h4>
                  <p className="receipt_product">뿌리채소 모음</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">4 레벨</h4>
                  <p className="receipt_product">전사 반지</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">5 레벨</h4>
                  <p className="receipt_product">스킬 - 싸움꾼</p>
                  <p className="receipt_product">스킬 - 정찰병</p>
                </li>
              </ul>
              <ul className="receipt_wrap">
                <li>
                  <h4 className="receipt_reqlv">6 레벨</h4>
                  <p className="receipt_product">슬라임 알 압착기</p>
                  <p className="receipt_product">마늘즙</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">7 레벨</h4>
                  <p className="receipt_product">요바의 반지</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">8 레벨</h4>
                  <p className="receipt_product">슬라임 부화기</p>
                  <p className="receipt_product">폭발성 탄약</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">9 레벨</h4>
                  <p className="receipt_product">이리듐 밴드</p>
                  <p className="receipt_product">오징어 먹물 라비올리</p>
                </li>
                <li>
                  <h4 className="receipt_reqlv">10 레벨</h4>
                  <p className="receipt_product">스킬 - 싸움꾼 2</p>
                  <p className="receipt_product">스킬 - 정찰병 2</p>
                </li>
              </ul>
            </div>
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
    harvestRef.current!.style.display = "none";
    mineralRef.current!.style.display = "none";
    fishRef.current!.style.display = "none";
    plantRef.current!.style.display = "none";
    battleRef.current!.style.display = "none";
  }
}
