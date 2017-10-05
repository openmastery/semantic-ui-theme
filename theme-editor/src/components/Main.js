import React, {Component} from 'react';
import {
  Header,
  Message,
}                         from 'semantic-ui-react';

const propTypes = {}

const defaultProps = {}

class Main extends Component {
  render() {
    return (
      <div id="main">
        <Header content='SUIR Header' />
        <Message content='Here we go...' />
      </div>
    );
  }
}

Main.propTypes = propTypes;

Main.defaultProps = defaultProps;

export default Main;
