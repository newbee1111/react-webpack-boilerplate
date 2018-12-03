import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import { mount } from 'enzyme'

import App from '../app/App'

describe('<App />', () => {
  it('should call componentDidMount once', () => {
    sinon.spy(App.prototype, 'componentDidMount')
    mount(<App />)
    expect(App.prototype.componentDidMount).to.have.property('callCount', 1)
    App.prototype.componentDidMount.restore()
  })
})
