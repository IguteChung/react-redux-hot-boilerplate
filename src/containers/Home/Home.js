import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add } from '../../reducers/counter';
import './Home.css';

class Home extends Component {

  componentDidMount() {
    this.props.add();
  }

  render() {
    return (
      <div>
        <h2 className="home-header">Home</h2>
        <p>{`Welcome back ${this.props.counter} times!`}</p>
      </div>
    );
  }
}

Home.propTypes = {
  counter: PropTypes.number,
  add: PropTypes.func,
};

Home.defaultProps = {
  counter: 0,
  add: () => {},
};

export default connect(
  state => ({ ...state.counter }),
  dispatch => bindActionCreators({ add }, dispatch),
)(Home);
