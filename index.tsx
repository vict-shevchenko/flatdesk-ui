import * as React from 'react';
import * as ReactDom from 'react-dom'
import greeter from './greeter'

const user = { firstName: "Jane", lastName: "User" };

ReactDom.render(
  <h1>{'Hello, world! ' + greeter(user)}</h1>,
  document.getElementById('example')
);