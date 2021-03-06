import React, { Component } from 'react';

class ViewPostToggle extends Component {
  state = {
    show: false
  }
  toggle = () => {
    this.setState({
      show: !this.state.show,
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.toggle} className="btn btn-primary btn-lg cardBtn">View Post</button>
        {this.props.children({
          show: this.state.show,
          toggle: this.toggle
        })}
      </div>
    )
  }
}

export default ViewPostToggle;