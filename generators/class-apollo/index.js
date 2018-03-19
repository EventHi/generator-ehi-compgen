'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function() {
    // Have Yeoman greet the user.
    this.log(
      yosay('Welcome to the transcendent ' + chalk.red('generator-ehi') + ' generator!'),
    );

    var prompts = [
      {
        type: 'input',
        name: 'compName',
        message: 'Would you like to name this component?',
        default: this.appName,
      },
    ];

    return this.prompt(prompts).then(
      function(props) {
        // To access props later use this.props.compName;
        this.props = props;
      }.bind(this),
    );
  },

  writing: function() {
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(`${this.props.compName}/index.js`),
      { componentName: this.props.compName },
    );
    this.fs.copyTpl(
      this.templatePath('component.jsx'),
      this.destinationPath(`${this.props.compName}/${this.props.compName}.jsx`),
      { componentName: this.props.compName },
    );
    this.fs.copyTpl(
      this.templatePath('componentQuery.graphql'),
      this.destinationPath(`${this.props.compName}/${this.props.compName}Query.graphql`),
      { componentName: this.props.compName },
    );
  },
});
