import * as QuestionController from '../controllers/question';

module.exports.setup = (app, prefix) => {
  app.get(prefix, QuestionController.getQuestions);
};
