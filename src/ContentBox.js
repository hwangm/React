import React, { Component } from 'react';

export default class ContentBox extends Component {
  render() {
    const style = {
        backgroundColor: this.props.boxColor,
        color: this.props.textColor,
        height: "200px"
    }
    return (
        <div className="ContentBox" style={style}>
            {this.props.content}
        </div>
    );
  }
}
