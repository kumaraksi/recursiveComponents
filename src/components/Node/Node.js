import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Node.css';

class Node extends Component {
 render() {
  const item = this.props.item;
  return (
   <div onClick={this.bubbleSelect} className="tree__child" key={item.name} data-name={item.name}>{item.name}
    {this.props.child}
   </div>
  );
 }
}

// Node.propTypes = {
//   data: PropTypes.Array,
// };

export default Node;