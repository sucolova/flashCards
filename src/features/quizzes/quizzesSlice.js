import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

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

export const createQuiz = (payload) => { // payload statt action als parameter 
  return (dispatch) => { // dispatch muss deklariert werden befor aufgerufen
    dispatch(addQuiz(payload));
    dispatch(addQuizId(payload));
  }
}

export const selectQuizzesSlice = (state) => state.quizzes;
export const addQuiz = quizzesSlice.actions.addQuiz;
export default quizzesSlice.reducer;
