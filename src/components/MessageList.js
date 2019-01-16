import React, { Component } from 'react'
import { connect } from 'react-redux';



class MessageList extends Component {
  render() {
      const { currentGroup } = this.props;
      const messages = this.props.chats.filter(chat => {
          return chat.groupId === currentGroup.id
      })
    return (
        
      <div className="message-list">
      {
          messages.map(message => {
              return <div className="message"><div className='message-username'>{message.nameuser}</div>
              <div className='message-text'>
              {message.message}</div></div>
          })
          }
      </div>
    )
  }
}
const mapStateToProps = state => ({
    chats: state.reducer.chats,
    currentGroup: state.reducer.currentGroup,
    currentUser: state.reducer.currentUser
  
  });
export default connect(mapStateToProps)(MessageList)