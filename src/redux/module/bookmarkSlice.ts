import { createSlice } from "@reduxjs/toolkit";

export const bookmarkSlice = createSlice({
  name: "bookmarkSlice",
  initialState: { name: [""], type: "default" },
  reducers: {
    signup: (state, action) => {
      if (state.name.includes(action.payload)) {
        state.name = state.name.filter((word) => word !== action.payload);
        console.log("삭제 : ", state.name);
        console.log("타입 : ", state.type);
      } else {
        state.name = [...state.name, action.payload];
        console.log("등록 : ", state.name);
        console.log("타입 : ", state.type);
      }
    },
    showdef: (state) => {
      state.type = "default";
      console.log("타입 : ", state.type);
    },
    showman: (state) => {
      state.type = "man";
      console.log("타입 : ", state.type);
    },
    showgirl: (state) => {
      state.type = "girl";
      console.log("타입 : ", state.type);
    },
    showfav: (state) => {
      state.type = "favorite";
      console.log("타입 : ", state.type);
    },
  },
});
