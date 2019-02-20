import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.sass';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return (
      <div>
        <span>my react project</span>
        <NavLink to="/sub">Go to Sub</NavLink>
      </div>
    );
  }
}
