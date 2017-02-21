import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

export default class Header extends Component {
  render() {
    const style = {
        height: 50,
        paddingTop: 15,
        backgroundColor: '#0068a5',
        color: 'white'
    }
    return (
        <Paper zDepth={1} style={style}>
            <span className="Navbar-title">Welcome</span>
            <span className="Navbar-navbutton">Navbuttons go here</span>
        </Paper>
    );
  }
}
