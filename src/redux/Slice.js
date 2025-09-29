import { createSlice } from '@reduxjs/toolkit';

const Slice = createSlice({
  name: 'quiz',
  initialState: {
    topic: '',
    level: '',
    difficulty: '',
    questionType: '',
    quizOutput: '',
  },
  reducers: {
    setQuizInput: (state, action) => {
      const { topic, level, difficulty, questionType } = action.payload;
      state.topic = topic;
      state.level = level;
      state.difficulty = difficulty;
      state.questionType = questionType;
    },
    setQuizOutput: (state, action) => {
      state.quizOutput = action.payload;
    },
  },
});

export const { setQuizInput, setQuizOutput } = Slice.actions;
export default Slice.reducer;
