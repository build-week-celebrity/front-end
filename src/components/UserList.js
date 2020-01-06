import React, { Component } from "react";
import { connect } from "react-redux";
import { displayUserList } from "../actions/actionCreators";
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      transaction: false
    };
  }
  componentDidMount() {
    this.props.displayUserList();
  }

  render() {
    if (!this.props.transaction) {
      return (
        <div className="status">
          <h3>Loading User Data</h3>
        </div>
      );
    }
    return (
      <div className="AdminConsole">
        <h1>Registered Users:</h1>
        <div className="userlist">
          {this.props.users.map(user => (
            <div className="usercard" key={user.id}>
              <p>{user.username}</p> <p> {user.email} </p>
              <p> {user.password}</p>
            </div>
          ))}
        </div>
        <div className="closebutton" onClick="">
          Close
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    celebrities: state.celebrities,
    transaction: state.transaction
  };
};
export default connect(mapStateToProps, { displayUserList })(UserList);
