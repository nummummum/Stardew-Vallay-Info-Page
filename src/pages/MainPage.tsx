import MainLotationCard from "../components/MainLotationCard";
import "../common.scss";
import "./MainPage.scss";
export default function MainPage() {
  return (
    <section className="page_wrap">
      <div className="inner">
        <ul className="cardlist">
          <li>
            <MainLotationCard
              titlename="번들, 아이템"
              content={
                "마을회관의 모든 번들과 보상,\n계절별 가장 효율적인 작물까지"
              }
              linkname="/bundleitem"
              imgurl="unnamed"
            />
          </li>
          <li>
            <MainLotationCard
              titlename="NPC"
              content={
                "내가 관심있는 NPC의 호감도,\n선물, 스케쥴을 확인해보세요!"
              }
              linkname="/character"
              imgurl="unnamed"
            />
          </li>
          <li>
            <MainLotationCard
              titlename="스킬, 요리 (개발중)"
              content={
                "어떤 스킬을 찍는게 좋을까,\n효과좋은 요리 제조법은 뭐지??"
              }
              linkname="/skillcook"
              imgurl="unnamed"
            />
          </li>
          <li>
            <MainLotationCard
              titlename="퀘스트 (개발중)"
              content={"중요 퀘스트만 보고싶어요!\n필수퀘와 게시판퀘를 한번에"}
              linkname="/character"
              imgurl="unnamed"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
