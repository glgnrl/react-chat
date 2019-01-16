import React, { Component } from 'react'
import{ connect } from 'react-redux';

import { addUser } from '../action/action'

class InsertUser extends Component {
  state ={ user: '' }
 
  generateID(){
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

  handleAdduser(e) {
    e.preventDefault()

    this.props.addUser({
      userId: this.generateID(),
      userName: this.state.user

    })
    this.setState({
      user:''
    })

  }

  handleChange(e) {
    this.setState({
      user: e.target.value
    })
  }
  
  render() {
    return (
      <div className="insert-user">
      <form  onSubmit={this.handleAdduser.bind(this)}>
        <input
        onChange={this.handleChange.bind(this)}
        type="text"
        value={this.state.user}
        placeholder="Insert User"
        required/>
        </form>
        <span>UserName: {this.props.currentUser.userName}
        </span>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  currentUser: state.reducer.currentUser,
});
export default connect(mapStateToProps,{addUser})(InsertUser)