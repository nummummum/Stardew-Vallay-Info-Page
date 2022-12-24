import { Button } from "antd";
import { Link } from "react-router-dom";
import "./MainLotationCard.scss";
import "../common.scss";
import { Content } from "antd/lib/layout/layout";

type CardType = {
  titlename: string;
  content: string;
  linkname: string;
  imgurl: string;
};

export default function MainLotationCard({
  titlename,
  content,
  linkname,
  imgurl,
}: CardType) {
  const url = "/images/Card/" + imgurl + ".png";
  return (
    <section className="card_wrap">
      <div className="text_content">
        <h4>{titlename}</h4>
        <p>
          {content.split("\n").map((txt) => {
            return (
              <span key={txt}>
                {txt}
                <br />
              </span>
            );
          })}
        </p>
        <Link to={linkname}>
          <Button>한번에 보기</Button>
        </Link>
      </div>
      <div className="img_content">
        <img src={url} alt={titlename} />
      </div>
    </section>
  );
}
