import { SearchOutlined } from "@ant-design/icons";
import { Space, Button } from "antd";
import { useRef, useEffect, BaseSyntheticEvent } from "react";
import BundleShowComp from "../components/BundleShowComp";
import ItemShowComp from "../components/ItemShowComp";
import SkillShowComp from "../components/SkillShowComp";
import { EnchantShowComp } from "../components/EnchantShowComp";

export default function SkillCookPage() {
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
            스킬
          </Button>
          <Button icon={<SearchOutlined />} onClick={(e) => changeType(e, 2)}>
            인챈트
          </Button>
        </Space>
        <div className="bundle_btn_wrap" ref={bundleRef}>
          <SkillShowComp />
        </div>
        <div className="item_wrap" ref={itemRef}>
          <EnchantShowComp />
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
