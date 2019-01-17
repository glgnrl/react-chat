import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeCurrentGroup } from '../action/action'


class RoomList extends Component {


  handleGroupItem(item) {
  this.props.changeCurrentGroup(item)
  if (this.props.currentGroup){
        
      
    }

  }
  render() {
    const { currentGroup } = this.props;
    console.log('group', this.props.groups)
    return (
      <div className="room-list">
          <h2>Room List</h2>
          <div className="content-room">
          {
            this.props.groups.map(item => {
              return <button className="btnGroupList"key={item.id} style={currentGroup.id === item.id ? { backgroundColor: '#3f4144' } :{}}
              onClick={this.handleGroupItem.bind(this, item)}>{item.title}</button>
            })
          }
          </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  groups: state.reducer.groups,
  currentGroup: state.reducer.currentGroup
});
export default connect(mapStateToProps, {changeCurrentGroup})(RoomList);