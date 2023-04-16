import "./EnchantShowComp.scss";
export function EnchantShowComp() {
  return (
    <>
      <h4 className="enchant_title">무기 재련</h4>
      <p className="enchant_content">
        근접 무기(단검, 망치, 검)은 재련으로 최대 3번까지 스텟을 올릴 수
        있습니다. 재련 시, 보석 한 개와 10/15/20개의 잉걸불 파편이 필요합니다.
        다이아몬드를 사용하면 최고 단계의 인챈트가 무작위로 부여되며, 잉걸불
        파편은 10개 밖에 들지 않습니다.
      </p>
      <ul>
        <li className="enchant_chart">
          <p>자수정</p>
          <p>넉백 증가 (단계당 1)</p>
        </li>
        <li className="enchant_chart">
          <p>아쿠아마린</p>
          <p>치명타 확률 증가 (단계당 4.6%)</p>
        </li>
        <li className="enchant_chart">
          <p>에메랄드</p>
          <p>무기 속도 증가 (+3/+2/+3)</p>
        </li>
        <li className="enchant_chart">
          <p>옥</p>
          <p>치명타 데미지 증가 (단계당 10%)</p>
        </li>
        <li className="enchant_chart">
          <p>루비</p>
          <p>데미지 증가 (단계당 10%)</p>
        </li>
        <li className="enchant_chart">
          <p>토파즈</p>
          <p>방어력 증가 (단계당 1)</p>
        </li>
        <li className="enchant_chart">
          <p>다이아몬드</p>
          <p>무작위 효과 (최고단계로)</p>
        </li>
      </ul>
      <h4 className="enchant_title">인챈트</h4>
      <p className="enchant_content">
        아무 무기, 도구에 (냄비, 지팡이, 낫 제외)에 무작위 인챈트를 추가합니다.
        무지갯빛 파편과 잉걸불 파편 20개가 소모됩니다. 1개만 인챈트가 되며
        효과는 랜덤입니다.
      </p>
      <h5 className="enchant_title_little">전투 인챈트</h5>
      <ul>
        <li className="enchant_chart">
          <p>기술자</p>
          <p>특수 공격 쿨타임 50% 감소.</p>
        </li>
        <li className="enchant_chart">
          <p>살충</p>
          <p>벌레에게 데미지 2배, 기갑 벌레를 잡을 수 있음.</p>
        </li>
        <li className="enchant_chart">
          <p>성기사</p>
          <p>언데드/그림자에게 데미지 50% 증가, 미라의 부활을 막음.</p>
        </li>
        <li className="enchant_chart">
          <p>흡혈</p>
          <p>공격할 때 확률적으로 몬스터의 최대 체력의 10%만큼 흡수.</p>
        </li>
        <li className="enchant_chart">
          <p>건초기</p>
          <p>
            잡초를 벨 때 더 많은 섬유를 얻을 수 있고(50%), 건초가 드랍될 확률이
            생김(33%)
          </p>
        </li>
      </ul>
      <h5>도구 인챈트</h5>
      <ul>
        <li className="enchant_chart">
          <p>이름</p>
          <p>도끼</p>
          <p>낚싯대</p>
          <p>호미</p>
          <p>곡괭이</p>
          <p>물통</p>
          <p>효과</p>
        </li>
        <li className="enchant_chart">
          <p>효율</p>
          <p>O</p>
          <p>O</p>
          <p>O</p>
          <p>O</p>
          <p>O</p>
          <p>기력을 소모하지 않게 됩니다.</p>
        </li>
        <li className="enchant_chart">
          <p>신속</p>
          <p>O</p>
          <p></p>
          <p>O</p>
          <p>O</p>
          <p></p>
          <p>도구 사용 속도가 빨라집니다.</p>
        </li>
        <li className="enchant_chart">
          <p>강력</p>
          <p>O</p>
          <p></p>
          <p></p>
          <p>O</p>
          <p></p>
          <p>위력 수준이 증가합니다.</p>
        </li>
        <li className="enchant_chart">
          <p>범위 증가</p>
          <p></p>
          <p></p>
          <p>O</p>
          <p></p>
          <p>O</p>
          <p>
            범위증가를 위한 차지 횟수가 증가합니다. 효과 범위가 최대 5x5타일까지
            증가합니다.
          </p>
        </li>
        <li className="enchant_chart">
          <p>풍부</p>
          <p></p>
          <p></p>
          <p>O</p>
          <p></p>
          <p></p>
          <p>땅을 팠을 때 50% 확률로 아이템이 2개가 나옵니다.</p>
        </li>
        <li className="enchant_chart">
          <p>고고학자</p>
          <p></p>
          <p></p>
          <p>O</p>
          <p></p>
          <p></p>
          <p>유물 위치에서 유물이 나올 확률이 2배가 됩니다.</p>
        </li>
        <li className="enchant_chart">
          <p>무한</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>O</p>
          <p>물이 무한대가 됩니다.</p>
        </li>
        <li className="enchant_chart">
          <p>마스터</p>
          <p></p>
          <p>O</p>
          <p></p>
          <p></p>
          <p></p>
          <p>플레이어가 사용할 때 낚시 레벨이 추가로 증가합니다.</p>
        </li>
        <li className="enchant_chart">
          <p>보존</p>
          <p></p>
          <p>O</p>
          <p></p>
          <p></p>
          <p></p>
          <p>50%확률로 미끼와 낚시도구가 소모되지 않습니다.</p>
        </li>
        <li className="enchant_chart">
          <p>자동 낚시 바늘</p>
          <p></p>
          <p>O</p>
          <p></p>
          <p></p>
          <p></p>
          <p>
            물고기가 걸렸을 때 자동으로 끌어올립니다(바로 미니게임이
            시작됩니다).
          </p>
        </li>
        <li className="enchant_chart">
          <p>벌목기</p>
          <p>O</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>
            나무에게 보통 3개의 나무가 추가로 나옵니다. 그루터기에서 단단한
            나무가 추가로 나올 확률이 생깁니다. 거대작물에서 추가 생산물이 나올
            확률이 생깁니다.
          </p>
        </li>
      </ul>
      <h4 className="enchant_title">인피니트 무기</h4>
      <p className="enchant_content">
        치의 퀘스트 보상으로 산 갤럭시 소울(1)과 잉걸불 파편(20)으로 재련을 할
        수 있습니다. 이를 3번 하면(총 갤럭시 소울 3개와 잉걸불 파편 60개 소모)
        무기가 더 강력한 "인피니트" 무기로 변합니다. 갤럭시 소드,해머,대거에
        사용 가능합니다.
      </p>
      <h4 className="enchant_title">무기 외형 변화와 반지 결합</h4>
      <p className="enchant_content">첫 번 째에 사용할 무기와 두 번 째에 외</p>
    </>
  );
}
