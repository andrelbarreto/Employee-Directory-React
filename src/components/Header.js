import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h2>Employee Directory</h2>
        <p>Click on arrows next to filter by Name, Phone, etc or use Search to narrow your results.</p>
      </div>
    )
  }
}
