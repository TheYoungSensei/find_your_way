import { connect } from 'react-redux';

import Map from './Map';

const mapStateToProps = state => ({
  question: state.question.currentQuestion,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
