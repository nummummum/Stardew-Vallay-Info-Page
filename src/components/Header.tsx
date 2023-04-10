import "./Header.scss";
import "../common.scss";
import { Space, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <div className="inner">
        <Link to={"/"}>
          <div className="logo_text">STARDEW VALLEY INFO</div>
        </Link>
        <ul className="header_menu">
          <Space direction="vertical">
            <Space>
              <li>
                <Link to={"/bundleitem"}>
                  <Button icon={<SearchOutlined />}>번들/아이템</Button>
                </Link>
              </li>
              <li>
                <Link to={"/character"}>
                  <Button icon={<SearchOutlined />}>마을 주민</Button>
                </Link>
              </li>
              <li>
                <Link to={"/skillcook"}>
                  <Button icon={<SearchOutlined />}>스킬/요리</Button>
                </Link>
              </li>
              <li>
                <Link to={"/quest"}>
                  <Button icon={<SearchOutlined />}>퀘스트</Button>
                </Link>
              </li>
              <li className="btn_admin">
                <Link to={"/admin"}>
                  <Button icon={<SearchOutlined />}>관리</Button>
                </Link>
              </li>
            </Space>
          </Space>
        </ul>
      </div>
    </div>
  );
}
