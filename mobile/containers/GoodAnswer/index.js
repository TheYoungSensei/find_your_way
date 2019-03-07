import { connect } from 'react-redux';

import GoodAnswer from './GoodAnswer';

const mapStateToProps = state => ({
  questions: state.question.questions,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GoodAnswer);
