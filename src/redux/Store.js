import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './Slice';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
