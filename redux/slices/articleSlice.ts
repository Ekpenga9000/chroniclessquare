import { createSlice } from "@reduxjs/toolkit";
import { ContentDetails } from "@app/interfaces/interfaces";

// Slice is made up of 3 steps:
// 1. Define the initial state
// 2. Define one or more reducers
// 3. Export the action creators and reducers

// Define the initial state using that type

const articleSlice = createSlice({
  name: "article",
  initialState: {
    value: {
      title: "",
      content: [] as ContentDetails[],
    },
  },
  reducers: {
    addTitle: (state, action) => {
      state.value.title = action.payload;
    },
    addContent: (state, action) => {
      state.value.content.push(action.payload);
    },
  },
});

export const { addTitle, addContent } = articleSlice.actions;
export default articleSlice;
