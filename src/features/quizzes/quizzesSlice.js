import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = action.payload;
    }
  }
});

export const selectQuizzesSlice = (state) => state.quizzes;
export const addQuiz = quizzesSlice.actions.addQuiz;
export default quizzesSlice.reducer;
