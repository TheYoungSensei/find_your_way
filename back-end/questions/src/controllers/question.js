import sanitize from 'sanitize-html';
import Question from '../models/question';

export function getQuestions(req, res, next) {
  Question.find().exec((err, questions) => {
    if (err) {
      return next(new Error(JSON.stringify({ message: 'Error from server', status: 503 })));
    }
    questions.forEach((question) => question.answers = []);
    return res.json({ questions });
  });
}
