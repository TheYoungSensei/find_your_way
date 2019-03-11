import { connect } from 'react-redux';

import Transition from './Transition';

const mapStateToProps = state => ({
  isCorrect: state.question.isCorrect,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Transition);
