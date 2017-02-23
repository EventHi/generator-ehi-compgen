# generator-ehi-compgen [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

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
import theme from './ComponentName.css';

type PropsType = {

}

const ComponentName = (props: PropsType) => (
  <span>{'ComponentName'}</span>
);

export default ComponentName;

```
## ES6 Class Component Example
### Input
```bash

yo ehi-compgen:class #es6 class component
```
### Output
```js

//              ___             _   _  _ _
//             | __|_ _____ _ _| |_| || (_)
// Property of:| _|\ V / -_) ' \  _| __ | |
//             |___|\_/\___|_||_\__|_||_|_|
//

import React from 'react';
import theme from './ComponentName.css';


type Propstype = {

}

type Statetype = {

}


export default class ComponentName extends React.Component<PropsType, StateType> {
  props: Propstype
  state: Statetype

  render() {
    return (
      <span>{'ComponentName'}</span>
    );
  }
}
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
