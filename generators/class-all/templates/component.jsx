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

import <%= componentName %>Query from './<%= componentName %>Query.graphql';

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

const mapStateToProps = (state, ownProps) => {
  const selector = formValueSelector(ownProps.form);
  return {};
};

const mapDispatchToProps = dispatch => ({ dispatch });

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  graphql(<%= componentName %>Query),
)(<%= componentName %>);
