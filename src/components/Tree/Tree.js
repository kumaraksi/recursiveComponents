import React, { Component } from 'react';
import Node from './../Node/Node';
import PropTypes from 'prop-types';
import './Tree.css';

class Tree extends Component {
  renderNodes = (arr) => {
    let nodes = [];
    let child = [];
    for (const item of arr) {
      for (const prop in item) {
        if (item[prop].constructor === Array) {
          child = <Tree data={item[prop]} selectNode={this.props.selectNode} />
        }
      }
      nodes.push(<Node item={item} child={child}/>)
    }
    return nodes;
  }

  // bubbleSelect = (event) => {
  //   let val = event.target.getAttribute('data-name');
  //   console.log('click event', event, val)
  // }

  render() {
    const nodes = this.renderNodes(this.props.data, 0);
    return (
      <div className="tree">
        {nodes}
      </div>
    );
  }
}

Tree.propTypes = {
  data: PropTypes.Array,
};

export default Tree;