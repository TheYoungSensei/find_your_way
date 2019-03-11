import { connect } from 'react-redux';

import Question from './Question';

const mapStateToProps = state => ({
  question: state.question.currentQuestion,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
