import React, { Component } from 'react'

import {padding, margin} from 'styled-utils'

export default class App extends Component {
  render() {
    return (
      <div className={padding(2, 3, 2, 1) + " " + margin(2, 3, 2, 1)}>
        hello
      </div>
    )
  }
}
