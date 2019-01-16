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
        <div><h2>Room List</h2></div>
          {
            this.props.groups.map(item => {
              return <button className="btnGroupList"key={item.id} style={currentGroup.id ===item.id ? { backgroundColor: '#f1f1f1' } :{}}
              onClick={this.handleGroupItem.bind(this, item)}>{item.title}</button>
            })
          }
          
      </div>
    )
  }
}
const mapStateToProps = state => ({
  groups: state.reducer.groups,
  currentGroup: state.reducer.currentGroup
});
export default connect(mapStateToProps, {changeCurrentGroup})(RoomList);