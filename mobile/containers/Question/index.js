import { connect } from 'react-redux';

import Question from './Question';
import { wrongAnswer, correctAnswer } from '../../redux/actions/question';

const mapStateToProps = state => ({
  question: state.question.currentQuestion,
});

const mapDispatchToProps = {
  wrongAnswer,
  correctAnswer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
