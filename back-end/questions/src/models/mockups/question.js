import Question, { BOOLEAN_TYPE } from '../question';

export function mockup() {
  const question1 = new Question({
    question: 'Est ce que la Croix Rouge est géniale ?',
    type: BOOLEAN_TYPE,
    answers: [],
    logicalDelete: false,
  });

  question1.save();
}
