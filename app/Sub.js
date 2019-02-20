import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class SubPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <NavLink to={'/'}>Go Back</NavLink>;
  }
}

export default SubPage;
