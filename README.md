# styled-utils

> a set of utility functions for styled components and css-in-js

[![NPM](https://img.shields.io/npm/v/styled-utils.svg)](https://www.npmjs.com/package/styled-utils) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @ambewas/styled-utils
```

## Usage

```jsx
import React, { Component } from 'react'

import {padding, margin} from '@ambewas/styled-utils'

export default class App extends Component {
  render() {
    return (
      <div className={padding(2, 3, 2, 1) + " " + margin(2, 3, 2, 1)}>
        hello
      </div>
    )
  }
}


```

## License

MIT © [ambewas](https://github.com/ambewas)
