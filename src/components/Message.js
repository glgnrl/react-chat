import React, { Component } from 'react';
import { connect } from 'react-redux';

class Message extends Component {
  render() {
    return (
      <div className="message">
        <div className='message-username'>{this.props.currentUser.userName} </div>
        <div className='message-text'>{this.props.chats.message}</div> 
      </div>
    )
  }
}
const mapStateToProps = state => ({
  chats: state.reducer.chats,
  currentUser: state.reducer.currentUser
});
export default connect(mapStateToProps)(Message)
