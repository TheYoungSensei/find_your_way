import {
  GET_QUESTIONS_ERROR,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_LOADING,
  SCAN_QUESTION,
  CORRECT_ANSWER,
  WRONG_ANSWER,
} from '../actions/question';

const initialState = {
  error: undefined,
  loading: false,
  questions: {},
  currentQuestion: -1,
  isCorrect: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        loading: false,
      };
    case GET_QUESTIONS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SCAN_QUESTION:
      return {
        ...state,
        isCorrect: false,
        currentQuestion: state.questions[action.payload],
      };
    case CORRECT_ANSWER:
      return {
        ...state,
        isCorrect: true,
      };
    case WRONG_ANSWER:
      return {
        ...state,
        isCorrect: false,
      };
    default:
      return state;
  }
}
