import { connect } from 'react-redux';

import { getQuestions } from '../../redux/actions/question';

import Home from './Home';

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  getQuestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
