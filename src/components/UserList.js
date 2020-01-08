import React, { Component } from "react";
import { connect } from "react-redux";
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usertransaction: false
    };
  }
  componentDidMount() {
    this.props.displayUserList();
  }
  handleclose = () => {
    this.props.history.goBack();
  };
  render() {
    if (!this.props.transaction) {
      return (
        <div className="status">
          <h3> Loading User Data </h3>{" "}
        </div>
      );
    }
    return (
      <div className="AdminConsole">
        <h1> Registered Users: </h1>{" "}
        <div className="userlist">
          {" "}
          {this.props.users.map(user => (
            <div className="usercard" key={user.id}>
              <p> {user.username} </p>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        <div className="closebutton" onClick={this.handleclose()}>
          Close{" "}
        </div>{" "}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users,
    transaction: state.transaction
  };
};
export default connect(mapStateToProps, {})(UserList);
