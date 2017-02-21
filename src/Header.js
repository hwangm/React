import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

export default class Header extends Component {
  render() {
    const style = {
      backgroundColor: '#222',
      color: 'white',
      height: 'auto',
      padding: 20,
      marginBottom: 5
    };
    return (
        <Paper zDepth={1} style={style}>
            <h2>Welcome to Matthew Hwang's First React App</h2>
        </Paper>
    );
  }
}
