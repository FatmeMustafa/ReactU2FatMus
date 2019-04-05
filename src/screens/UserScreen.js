import React, { Component } from 'react';

/*The purpose of UserScreen is to render the specific user from the list that a user clicks on. If no user is selected (no parameter) a text is
outputted.*/
class UserScreen extends Component {
  
  render() {
    
    const {match} = this.props;

    let selectedUser = <p>No user selected!</p>;

    //If parameter is passed show username clicked on
    if (match.params.userName) {
      selectedUser = <p>Selected user: {match.params.userName}</p>
    }
  
    return (
      <div style={{ margin: "0 auto", textAlign: "center", backgroundColor: "white", padding: "15px", width: "50%" }}>{selectedUser}</div>
    ) 
  }   
}

export default UserScreen;



