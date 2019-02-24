import { connect } from 'react-redux';

import { back } from '../../redux/actions/navigation';

import Question from './Question';

const mapStateToProps = state => ({
  questions: state.question.questions,
});

const mapDispatchToProps = {
  back,
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
