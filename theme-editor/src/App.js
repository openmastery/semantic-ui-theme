import React, { Component } from 'react';
import {
  Header,
  Message
}                           from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="sui-theme-editor">
        <Header content='SUIR Header' />
        <Message content='Here we go...' />
      </div>
    );
  }
}

export default App;
