//              ___             _   _  _ _
//             | __|_ _____ _ _| |_| || (_)
// Property of:| _|\ V / -_) ' \  _| __ | |
//             |___|\_/\___|_||_\__|_||_|_|
//
// @flow
import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { graphql, gql, compose } from 'react-apollo';
import theme from './<%= componentName %>.css';

type PropsType = {};

type DefaultPropsType = {};

type StateType = {};

class <%= componentName %> extends Component<DefaultPropsType, PropsType, StateType> {
  static defaultProps: DefaultPropsType;
  props: PropsType;
  state: StateType;

  render() {
    return (
      <div>
        <span>{'<%= componentName %>'}</span>
      </div>
    );
  }
}

const <%= componentName %>Query = gql`
  query {}
`;

export default compose(withStyles(theme), graphql(<%= componentName %>Query))(<%= componentName %>);