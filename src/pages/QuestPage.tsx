import { ChangeEvent, useState } from "react";

export default function QuestPage() {
  type time = {
    time: string;
    content: string;
    id: number;
  };
  const [textArea, setTextArea] = useState("");
  const [modifyText, setModifyText] = useState<string[]>([]);
  const [modifyText2, setModifyText2] = useState<time[]>([]);
  return (
    <div>
      {/* <textarea onChange={onChangeText} value={textArea} />
      <button onClick={submitText}>제출</button>
      {viewText()} */}
    </div>
  );

  // function onChangeText(e: ChangeEvent<HTMLTextAreaElement>) {
  //   setModifyText2([]);
  //   setTextArea(e.target.value);
  //   setModifyText(textArea.split("\n"));
  //   console.log(modifyText);
  // }
  // function submitText() {
  //   console.log(modifyText);
  //   modifyText.map((item, index) => {
  //     const modifyItem = item.split("\t");
  //     console.log(modifyItem);
  //     const itemTime = modifyItem[0];
  //     const itemContent = modifyItem[1];
  //     if (
  //       itemTime === "" ||
  //       itemTime === undefined ||
  //       itemContent === "" ||
  //       itemContent === undefined
  //     ) {
  //       return;
  //     } else {
  //       modifyText2.push({
  //         time: itemTime,
  //         content: itemContent,
  //         id: modifyText2.length,
  //       });
  //     }
  //   });
  //   console.log(modifyText2);
  // }
  // function viewText() {
  //   return (
  //     <div>
  //       {modifyText.map((item, index) => {
  //         return <p>{item}</p>;
  //       })}
  //     </div>
  //   );
  // }
}
