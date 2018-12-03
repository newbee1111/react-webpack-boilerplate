import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

class Wrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return <App />
  }
}

ReactDOM.render(<Wrapper />, document.getElementById('container'))
