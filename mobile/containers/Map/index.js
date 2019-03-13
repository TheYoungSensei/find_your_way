import { connect } from 'react-redux';
import { back } from '../../redux/actions/navigation';

import Map from './Map';

const mapStateToProps = state => ({
  question: state.question.currentQuestion,
});

const mapDispatchToProps = {
  back,
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
