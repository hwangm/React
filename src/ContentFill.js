import React, { Component } from 'react';

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