import { connect } from 'react-redux';

import { getQuestions, scanQuestion } from '../../redux/actions/question';

import Home from './Home';

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  getQuestions,
  scanQuestion,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
