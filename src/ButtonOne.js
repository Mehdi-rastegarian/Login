import React from 'react';
import './Style.css';

class NameBox extends React.Component {
  render() {
    return (
      <div className="container">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default NameBox;
