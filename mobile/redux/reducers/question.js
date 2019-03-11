import {
  GET_QUESTIONS_ERROR,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_LOADING,
  SCAN_QUESTION
} from '../actions/question';

const initialState = {
  error: undefined,
  loading: false,
  questions: {},
  currentQuestion: -1,
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
        currentQuestion: state.questions[action.payload],
      };
    default:
      return state;
  }
}
