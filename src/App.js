import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './App.css';
import MessageList from './components/MessageList';
import RoomList from './components/RoomList';
import SendMessageForm from './components/SendMessageForm';
import NewRoomForm from './components/NewRoomForm';
import InsertUser from './components/InsertUser';

import store from './store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <RoomList />
        <MessageList />
        <SendMessageForm />        
        <InsertUser />
        <NewRoomForm />
      </div>
      </Provider>
    );
  }
}

export default App;

