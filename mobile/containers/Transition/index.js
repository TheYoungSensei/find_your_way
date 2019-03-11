import { connect } from 'react-redux';

import Transition from './Transition';

const mapStateToProps = state => ({
  isSuccess: state.question.isSuccess,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Transition);
