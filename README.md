# generator-ehi-compgen

[![npm version](https://badge.fury.io/js/generator-ehi-compgen.svg)](https://badge.fury.io/js/generator-ehi-compgen) [![Greenkeeper badge](https://badges.greenkeeper.io/EventHi/generator-ehi-compgen.svg)](https://greenkeeper.io/)

This package uses Flowtype, Apollo-Client, and Material-UI.

This is used internally at the EventHi team to generate boilerplate for new React components.

There are a few different options available:

* [Stateless Functional Component](#stateless-functional-component-example)
* [ES6 Class Component](#es6-class-component-example)
* [ES6 Class Component Example with Apollo-Client](#es6-class-component-example-with-apollo-client)
* [ES6 Class Component Example with Redux Connect](#es6-class-component-example-with-redux-connect)
* [ES6 Class Component Example with Redux Connected and GraphQL](#es6-class-component-example-with-redux-connected-and-graphql)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ehi-compgen using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-ehi-compgen
```

Then generate your new component:

```bash
yo ehi-compgen  # Stateless Functional Component
yo ehi-compgen:class  # ES6 Class Component
yo ehi-compgen:class-apollo # ES6 Class Component Example with Apollo-Client
yo ehi-compgen:class-redux # ES6 Class Component Example with Redux Connect
yo ehi-compgen:class-all # ES6 Class Component Example with Redux Connected and GraphQL
```

## Stateless Functional Component Example

### Input

```bash
yo ehi-compgen  # Stateless Functional Component
```

### Output

```js
//              ___             _   _  _ _
//             | __|_ _____ _ _| |_| || (_)
// Property of:| _|\ V / -_) ' \  _| __ | |
//             |___|\_/\___|_||_\__|_||_|_|
//
// @flow

import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({});

type Props = {};

const ComponentName = (props: Props) => (
  <div>
    <span>ComponentName</span>
  </div>
);

export default withStyles(styles)(ComponentName);
```

## ES6 Class Component Example

### Input

```bash
yo ehi-compgen:class # ES6 Class Component
```

### Output

```js
//              ___             _   _  _ _
//             | __|_ _____ _ _| |_| || (_)
// Property of:| _|\ V / -_) ' \  _| __ | |
//             |___|\_/\___|_||_\__|_||_|_|
//
// @flow

import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({});

type Props = {};

type State = {};

class ComponentName extends Component<Props, State> {
  state: State;
  props: Props;

  render() {
    return (
      <div>
        <span>ComponentName</span>
      </div>
    );
  }
}

export default withStyles(styles)(ComponentName);
```

## ES6 Class Component Example with Apollo-Client

### Input

```bash
yo ehi-compgen:class-apollo # ES6 Class Component Example with Apollo-Client
```

### Output

```js
//              ___             _   _  _ _
//             | __|_ _____ _ _| |_| || (_)
// Property of:| _|\ V / -_) ' \  _| __ | |
//             |___|\_/\___|_||_\__|_||_|_|
//
// @flow

import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { withStyles } from 'material-ui/styles';

import ComponentNameQuery from './ComponentNameQuery.graphql';

const styles = theme => ({});

type Props = {};

type State = {};

class ComponentName extends Component<Props, State> {
  state: State;
  props: Props;

  render() {
    return (
      <div>
        <span>ComponentName</span>
      </div>
    );
  }
}

export default compose(withStyles(styles), graphql(ComponentNameQuery))(ComponentName);
```

## ES6 Class Component Example with Redux Connect

### Input

```bash
yo ehi-compgen:class-redux # ES6 Class Component Example with Redux Connect
```

### Output

```js
//              ___             _   _  _ _
//             | __|_ _____ _ _| |_| || (_)
// Property of:| _|\ V / -_) ' \  _| __ | |
//             |___|\_/\___|_||_\__|_||_|_|
//
// @flow
import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({});

type Props = {};

type State = {};

class ComponentName extends Component<Props, State> {
  state: State;
  props: Props;

  render() {
    return (
      <div>
        <span>ComponentName</span>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const selector = formValueSelector(ownProps.form);
  return {};
};

const mapDispatchToProps = dispatch => ({ dispatch });

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(
  ComponentName,
);
```

## ES6 Class Component Example with Redux Connected and GraphQL

### Input

```bash
yo ehi-compgen:class-all # ES6 Class Component Example with Redux Connected and GraphQL
```

### Output

```js
//              ___             _   _  _ _
//             | __|_ _____ _ _| |_| || (_)
// Property of:| _|\ V / -_) ' \  _| __ | |
//             |___|\_/\___|_||_\__|_||_|_|
//
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { withStyles } from 'material-ui/styles';

import ComponentNameQuery from './ComponentNameQuery.graphql';

const styles = theme => ({});

type Props = {};

type State = {};

class ComponentName extends Component<Props, State> {
  state: State;
  props: Props;

  render() {
    return (
      <div>
        <span>ComponentName</span>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const selector = formValueSelector(ownProps.form);
  return {};
};

const mapDispatchToProps = dispatch => ({ dispatch });

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  graphql(ComponentNameQuery),
)(ComponentName);
```

## Getting To Know Yeoman

* Yeoman has a heart of gold.
* Yeoman is a person with feelings and opinions, but is very easy to work with.
* Yeoman can be too opinionated at times but is easily convinced not to be.
* Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT license
Copyright ©EventHi Inc

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The Software is provided "as is", without warranty of any kind, express or implied, including but not
limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In
no event shall the authors or copyright holders be liable for any claim, damages or other liability,
whether in an action of contract, tort or otherwise, arising from, out of or in connection with the
Software or the use or other dealings in the Software.

[npm-image]: https://badge.fury.io/js/generator-ehi.svg
[npm-url]: https://npmjs.org/package/generator-ehi-compgen
[travis-image]: https://travis-ci.org/EventHi/generator-ehi.svg?branch=master
[travis-url]: https://travis-ci.org/EventHi/generator-ehi-compgen
