# generator-ehi-compgen [![npm version](https://badge.fury.io/js/generator-ehi-compgen.svg)](https://badge.fury.io/js/generator-ehi-compgen)

This package is used internally at the EventHi team to generate boilerplate for new React components. This is available in both function and class forms.


## Installation

First, install [Yeoman](http://yeoman.io) and generator-ehi-compgen using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash

npm install -g yo
npm install -g generator-ehi-compgen
```

Then generate your new component:

```bash

yo ehi-compgen  # stateless component
yo ehi-compgen:class  # es6 class component
yo ehi-compgen:class-gql # es6 class component w/ graphql
```
## Stateless Component Example
### Input
```bash

yo ehi-compgen # functional component
```
### Output
```js

//              ___             _   _  _ _
//             | __|_ _____ _ _| |_| || (_)
// Property of:| _|\ V / -_) ' \  _| __ | |
//             |___|\_/\___|_||_\__|_||_|_|
//

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import theme from './<%= componentName %>.css';

type PropsType = {}

const ComponentName = (props: PropsType) => (
  <span>{'ComponentName'}</span>
);

export default withStyles(theme)(ComponentName);

```
## ES6 Class Component Example
### Input
```bash

yo ehi-compgen:class # es6 class component
```
### Output
```js

//              ___             _   _  _ _
//             | __|_ _____ _ _| |_| || (_)
// Property of:| _|\ V / -_) ' \  _| __ | |
//             |___|\_/\___|_||_\__|_||_|_|
//

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import theme from './ComponentName.css';

type PropsType = {};

type DefaultPropsType = {};

type StateType = {};

class ComponentName extends Component<DefaultPropsType, PropsType, StateType> {
  static defaultProps: DefaultPropsType;
  props: PropsType;
  state: StateType;

  render() {
    return <span>{'ComponentName'}</span>;
  }
}

export default withStyles(theme)(ComponentName);

```
## ES6 Class Component Example w/ Apollo-Client
### Input
```bash

yo ehi-compgen:class-gql # es6 class component w/ graphql
```
### Output
```js

//              ___             _   _  _ _
//             | __|_ _____ _ _| |_| || (_)
// Property of:| _|\ V / -_) ' \  _| __ | |
//             |___|\_/\___|_||_\__|_||_|_|
//

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { graphql, compose } from 'react-apollo';
import theme from './neuwnweinde.css';

type PropsType = {};

type DefaultPropsType = {};

type StateType = {};

class ComponentName extends Component<DefaultPropsType, PropsType, StateType> {
  static defaultProps: DefaultPropsType;
  props: PropsType;
  state: StateType;

  render() {
    return <span>{'ComponentName'}</span>;
  }
}

const ComponentNameQuery = gql`
  query {}
`;

export default compose(
  withStyles(theme),
  graphql(ComponentNameQuery),
)(ComponentName);


```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

 © [Kenneth Gabbara]()


[npm-image]: https://badge.fury.io/js/generator-ehi.svg
[npm-url]: https://npmjs.org/package/generator-ehi-compgen
[travis-image]: https://travis-ci.org/EventHi/generator-ehi.svg?branch=master
[travis-url]: https://travis-ci.org/EventHi/generator-ehi-compgen
