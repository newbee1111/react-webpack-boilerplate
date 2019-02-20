import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SubPage from './Sub';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/sub" component={SubPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Wrapper />, document.getElementById('container'));
