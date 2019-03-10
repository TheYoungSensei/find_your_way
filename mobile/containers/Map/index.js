import { connect } from 'react-redux';

import Map from './Map';

const mapStateToProps = state => ({
  questions: state.question.questions,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
