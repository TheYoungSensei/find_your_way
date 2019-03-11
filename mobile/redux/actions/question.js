import { get } from '../middlewares/request';

export const GET_QUESTIONS_LOADING = '@crjapp/questions/GET_QUESTIONS_LOADING';
export const GET_QUESTIONS_SUCCESS = '@crjapp/questions/GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_ERROR = '@crjapp/questions/GET_QUESTIONS_ERROR';
export const SCAN_QUESTION = '@crjapp/questions/SCAN_QUESTION';

export const scanQuestion = id => ({
  type: SCAN_QUESTION,
  payload: id,
});

const getQuestionsLoading = () => ({
  type: GET_QUESTIONS_LOADING,
});

const getQuestionsSuccess = questions => ({
  type: GET_QUESTIONS_SUCCESS,
  payload: questions,
});

const getQuestionsError = error => ({
  type: GET_QUESTIONS_ERROR,
  payload: error,
});

export function getQuestions() {
  return function action(dispatch) {
    dispatch(getQuestionsLoading());
    return get('/api/questions')
      .then((response) => {
        const questions = response.data.questions.reduce((map, obj) => {
          // eslint-disable-next-line no-param-reassign
          map[obj.id] = obj;
          return map;
        }, {});
        dispatch(getQuestionsSuccess(questions));
      })
      .catch((error) => {
        dispatch(getQuestionsError(error));
      });
  };
}
