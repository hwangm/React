import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

export default class Header extends Component {
  render() {
    const style = {
      backgroundColor: 'transparent',
      color: 'white',
      height: 'auto',
      textAlign: 'left',
      padding: 20
    };
    return (
        <AppBar title="Welcome to my portfolio" style={style} />
    );
  }
}
