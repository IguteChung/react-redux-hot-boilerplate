import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './About.css';

const About = props => (
  <div>
    <h2 className="about-header">About</h2>
    <p>{`Welcome back ${props.counter} times!`}</p>
  </div>
);

About.propTypes = {
  counter: PropTypes.number
};

About.defaultProps = {
  counter: 0
};

export default connect(state => ({ ...state.counter }))(About);
