import React, { Component } from 'react'
import{ connect } from 'react-redux';

import { addGroup } from '../action/action';

class NewRoomForm extends Component {
  state = { groupname: '' }
  
  generateID(){
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  handleOnSubmit(e) {
    e.preventDefault()
    this.props.addGroup({
      id: this.generateID(),
      title: this.state.groupname
    })
    this.setState({
      groupname: ''
    })
  }
  handleOnChange(e) {
    this.setState({
      groupname: e.target.value
    })
  }
  render() {
    return (
      <div className="new-room-form">
        <form  onSubmit={this.handleOnSubmit.bind(this)}>
            <input 
                className='inputGroup'
                onChange={this.handleOnChange.bind(this)}
                type='text'
                placeholder='NewRoom'
                value={this.state.groupname}
                required
            />
        </form>
      </div>
      
    )
  }
}
export default connect(null, { addGroup })(NewRoomForm);