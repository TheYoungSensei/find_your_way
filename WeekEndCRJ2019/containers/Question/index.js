import { connect } from 'react-redux';

import Question from './Question';

const mapStateToProps = state => ({
  questions: state.question.questions,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
