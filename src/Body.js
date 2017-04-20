import React, { Component } from 'react';
import ContentBox from './ContentBox';
import ContentFill from './ContentFill';

export default class Body extends Component {
  render() {
    return (
      <div className="Body-container">
        <div className="content">
          <ContentBox content="Welcome to" boxColor="#0068a5" textColor="white" />
          <ContentBox content="my beautiful portfolio" boxColor="#E8EAF6" textColor="#283593" />
        </div>
        <ContentFill content="box one" boxColor="#C62828" textColor="white" />
      </div>
    );
  }
}
