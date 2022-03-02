import React, { Component } from 'react'

export class Color extends Component {
  render() {
    return (
        <li key={this.props.keyItem}>
        <div className='colorShow' style={{backgroundColor: this.props.colorItem}}></div>
        {this.props.colorItem}
    </li>
    )
  }
}

export default Color
