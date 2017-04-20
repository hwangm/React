import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

export default class ContentFill extends Component {
  render() {
    const style = {
        backgroundColor: this.props.boxColor,
        color: this.props.textColor,
        height: '200px'
    }
    return (
        <div className="ContentFill" style={style}>
            {this.props.content}
        </div>
    );
  }
}