import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

export default class ContentBox extends Component {
  render() {
    const style = {
        backgroundColor: this.props.boxColor,
        color: this.props.textColor
    }
    return (
        <div className="ContentBox" style={style}>
            {this.props.content}
        </div>
    );
  }
}
