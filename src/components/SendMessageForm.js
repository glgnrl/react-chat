import React, { Component } from 'react'
import{ connect } from 'react-redux';

import { addChat } from '../action/action'

class SendMessageForm extends Component {
    state = {
      message: '',
    }

  

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }
  handleNewMessage(e) {
    console.log(this.state.message)
    e.preventDefault()
    this.props.addChat({
      groupId: this.props.currentGroup.id ,
      nameuser: this.props.currentUser.userName,
      message: this.state.message
      
    })
    this.setState({
      message:''
    })
  }
  
  render() {
    return (
      
       <form
        className="send-message-form"
        onSubmit={this.handleNewMessage.bind(this)}
       >
          <input 
            onChange={this.handleChange.bind(this)}
            value={this.state.message}
            type="text"
            placeholder="Type Message"
            required
         />
        </form>
    )
  }
}
const mapStateToProps = state => ({
  currentUser: state.reducer.currentUser,
  currentGroup: state.reducer.currentGroup,

});
export default connect(mapStateToProps, { addChat })(SendMessageForm) 