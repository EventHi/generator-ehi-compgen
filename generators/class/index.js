'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the transcendent ${chalk.red('generator-event-hi')} generator!`),
    );

    var prompts = [
      {
        type: 'input',
        name: 'compName',
        message: 'Would you like to name this component?',
        default: this.appName,
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
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
  }
};
