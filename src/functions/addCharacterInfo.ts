import { firestore } from "../firebase";
import "firebase/firestore";
import { collection, DocumentData, getDocs, query } from "firebase/firestore";

export default function addCharacterInfo() {
  const q = query(collection(firestore, "Resource/Character/Citizen"));
  const fbCharacter = firestore.collection("Resource/Character/Citizen");
  fbCharacter.doc("Haley").set({
    Name: "헤일리",
    Portrait: "Haley.png",
    Birth: "1월 1일",
    Schedule: {
      Spring: {
        Monday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Tuesday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Wednesday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Thursday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Friday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Saterday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Sunday: { "10:00 AM": "content", "11:00 AM": "content2" },
      },
      Summer: {
        Monday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Tuesday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Wednesday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Thursday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Friday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Saterday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Sunday: { "10:00 AM": "content", "11:00 AM": "content2" },
      },
      Fall: {
        Monday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Tuesday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Wednesday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Thursday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Friday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Saterday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Sunday: { "10:00 AM": "content", "11:00 AM": "content2" },
      },
      Winter: {
        Monday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Tuesday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Wednesday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Thursday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Friday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Saterday: { "10:00 AM": "content", "11:00 AM": "content2" },
        Sunday: { "10:00 AM": "content", "11:00 AM": "content2" },
      },
      Etc: {
        Raning: { "10:00 AM": "content", "11:00 AM": "content2" },
        Marry: { "10:00 AM": "content", "11:00 AM": "content2" },
      },
    },
    Favorite: { Love: {}, Like: {}, Normal: {}, Dislike: {}, Hate: {} },
    Event: {
      Friendship2: {
        condition: "",
        content: "",
      },
      Friendship4: {
        condition: "",
        content: "",
      },
      Friendship6: {
        condition: "",
        content: "",
      },
      Friendship8: {
        condition: "",
        content: "",
      },
      Friendship10: {
        condition: "",
        content: "",
      },
    },
    Marry: true,
  });
  getDocs(q).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      let data: DocumentData = doc.data();
      console.log(data);
    });
  });
}
