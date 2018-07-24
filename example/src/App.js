import React, { Component } from 'react'

import {getPadding, getMargin} from 'styled-utils'

export default class App extends Component {
  render() {
    return (
      <div className={getPadding(2, 3, 2, 1) + " " + getMargin(2, 3, 2, 1)}>
        hello
      </div>
    )
  }
}
