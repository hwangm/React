import React, { Component } from 'react';
import ContentBox from './ContentBox';

export default class Body extends Component {
  render() {
    return (
      <div className="Body-container">
        <div className="content">
          <ContentBox content="Hello stranger" boxColor="#0068a5" textColor="white" />
          <ContentBox content="Where are you going?" boxColor="#E8EAF6" textColor="#283593" />
        </div>
      </div>
    );
  }
}
