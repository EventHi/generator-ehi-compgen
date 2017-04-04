//              ___             _   _  _ _
//             | __|_ _____ _ _| |_| || (_)
// Property of:| _|\ V / -_) ' \  _| __ | |
//             |___|\_/\___|_||_\__|_||_|_|
//

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import theme from './<%= componentName %>.css';

type PropsType = {};

const <%= componentName %> = (props: PropsType) => (
  <span>{'<%= componentName %>'}</span>
);

export default withStyles(theme)(<%= componentName %>);
