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

const <%= componentName %> = (props: Props) => (
  <div>
    <span><%= componentName %></span>
  </div>
);

export default withStyles(styles)(<%= componentName %>);
