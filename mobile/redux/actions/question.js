import { get } from '../middlewares/request';

export const GET_QUESTIONS_LOADING = '@crjapp/questions/GET_QUESTIONS_LOADING';
export const GET_QUESTIONS_SUCCESS = '@crjapp/questions/GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_ERROR = '@crjapp/questions/GET_QUESTIONS_ERROR';

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
        dispatch(getQuestionsSuccess(response.data.questions));
      })
      .catch((error) => {
        dispatch(getQuestionsError(error));
      });
  };
}