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

class <%= componentName %> extends Component<Props, State> {
  state: State;
  props: Props;

  render() {
    return (
      <div>
        <span><%= componentName %></span>
      </div>
    );
  }
}

export default withStyles(styles)(<%= componentName %>);
