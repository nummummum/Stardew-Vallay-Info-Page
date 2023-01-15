import { Space, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../common.scss";
import "./BundleItemPage.scss";
import {
  BaseSyntheticEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { firestore } from "../firebase";
import { collection, DocumentData, getDocs, query } from "firebase/firestore";
import { bundleViewType } from "../types/types";
import BundleShowComp from "../components/BundleShowComp";
import ItemShowComp from "../components/ItemShowComp";
export default function BundleItemPage() {
  const bundleRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bundleRef.current!.style.display = "block";
    itemRef.current!.style.display = "none";
  }, []);
  return (
    <section className="page_wrap">
      <div className="inner">
        <Space>
          <Button icon={<SearchOutlined />} onClick={(e) => changeType(e, 1)}>
            번들
          </Button>
          <Button icon={<SearchOutlined />} onClick={(e) => changeType(e, 2)}>
            아이템
          </Button>
        </Space>
        <div className="bundle_btn_wrap" ref={bundleRef}>
          <BundleShowComp />
        </div>
        <div className="item_wrap" ref={itemRef}>
          <ItemShowComp />
        </div>
      </div>
    </section>
  );
  function changeType(e: BaseSyntheticEvent, typeNum: number) {
    bundleRef.current!.style.display = "none";
    itemRef.current!.style.display = "none";
    switch (typeNum) {
      case 1: {
        bundleRef.current!.style.display = "block";
        break;
      }
      case 2: {
        itemRef.current!.style.display = "block";
        break;
      }
      default: {
        break;
      }
    }
  }
}
