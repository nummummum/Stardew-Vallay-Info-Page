import {
  Layout,
  LayoutProps,
  Menu,
  Radio,
  RadioChangeEvent,
  theme,
} from "antd";
import "./AdminPage.scss";
import {
  PieChartOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React, { useRef, useState, useEffect } from "react";
import { type } from "os";
import CropComp from "../components/CropComp";
import FishComp from "../components/FishComp";
import PlantComp from "../components/PlantComp";
import MineralComp from "../components/MineralComp";
import ProductComp from "../components/ProductComp";
import FoodComp from "../components/FoodComp";
import ItemShowComp from "../components/ItemShowComp";
import AdminShowItem from "../components/AdminShowItem";
import AdminModifyItem from "../components/AdminModifyItem";
import AdminDeleteItem from "../components/AdminDeleteItem";

export default function AdminPage() {
  const itemShowRef = useRef<HTMLElement>(null);
  const itemAddRef = useRef<HTMLElement>(null);
  const itemModifyRef = useRef<HTMLElement>(null);
  const itemDeleteRef = useRef<HTMLElement>(null);
  const [itemValue, setItemValue] = useState(1);
  const [addSwitch, setAddSwitch] = useState(false);

  function getItem(label: string, key: string, icon?: any, children?: any) {
    return { key, icon, children, label };
  }
  const items = [
    getItem("아이템 관리", "sub1", <UserOutlined />, [
      getItem("아이템 보기", "1"),
      getItem("아이템 추가", "2"),
      getItem("아이템 수정", "3"),
      getItem("아이템 삭제", "4"),
    ]),
    getItem("NPC 관리", "sub2", <UserOutlined />, [
      getItem("NPC 보기", "5"),
      getItem("NPC 추가", "6"),
      getItem("NPC 수정", "7"),
      getItem("NPC 삭제", "8"),
    ]),
  ];
  return (
    <>
      <Layout className="ant-layout-has-sider">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["0"]}
            items={items}
            style={{ backgroundColor: "black" }}
            onSelect={({ item, key, keyPath, selectedKeys, domEvent }) => {
              SelectTab(key);
            }}
          />
        </Sider>
        <Layout className="item_show" ref={itemShowRef}>
          <AdminShowItem />
        </Layout>
        <Layout className="item_add" ref={itemAddRef}>
          <Header>
            <Radio.Group onChange={(e) => ItemTab(e)} value={itemValue}>
              <Radio value={1}>농사</Radio>
              <Radio value={2}>채집</Radio>
              <Radio value={3}>낚시</Radio>
              <Radio value={4}>채광</Radio>
              <Radio value={5}>가공품</Radio>
              <Radio value={6}>음식</Radio>
            </Radio.Group>
          </Header>
          <Content>{ItemAddTab()}</Content>
        </Layout>
        <Layout className="item_modify" ref={itemModifyRef}>
          <AdminModifyItem />
        </Layout>
        <Layout className="item_delete" ref={itemDeleteRef}>
          <AdminDeleteItem />
        </Layout>
      </Layout>
    </>
  );
  function SelectTab(key: string) {
    ClearTab();
    switch (key) {
      case "1": {
        itemShowRef.current!.style.display = "flex";
        break;
      }
      case "2": {
        itemAddRef.current!.style.display = "flex";
        break;
      }
      case "3": {
        itemModifyRef.current!.style.display = "flex";
        break;
      }
      case "4": {
        itemDeleteRef.current!.style.display = "flex";
        break;
      }
    }
  }
  function ClearTab() {
    itemAddRef.current!.style.display = "none";
    itemShowRef.current!.style.display = "none";
    itemModifyRef.current!.style.display = "none";
    itemDeleteRef.current!.style.display = "none";
  }
  function ItemTab(e: RadioChangeEvent) {
    setItemValue(e.target.value);
  }

  function ItemAddTab() {
    switch (itemValue) {
      case 1: {
        return <CropComp />;
        break;
      }
      case 2: {
        return <PlantComp />;
        break;
      }
      case 3: {
        return <FishComp />;
        break;
      }
      case 4: {
        return <MineralComp />;
        break;
      }
      case 5: {
        return <ProductComp />;
        break;
      }
      case 6: {
        return <FoodComp />;
        break;
      }
      default:
        break;
    }
  }
}
