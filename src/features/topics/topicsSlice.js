import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = action.payload;
      state.topics[action.payload.id].quizIds = [];
    },
    addQuizId: (state, action) => {
      state.topics[action.payload.topicId].quizIds.push(action.payload.id); // id = the quizId from the quizForm
    }
  },
});

export const selectTopicsSlice = (state) => state.topics;
export const addTopic = topicsSlice.actions.addTopic;
export const addQuizId = topicsSlice.actions.addQuizId;
export default topicsSlice.reducer;

