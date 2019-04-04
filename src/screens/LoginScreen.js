import React, { Component } from 'react';

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      info: true,
    }
  }

  //updates the content state and shows/hides content depending on the boolean value 
  toggleInfo = () => {
    const showInfo = this.state.info;
    this.setState({info: !showInfo});
  }



  render() {
    const styleContainer = {
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transition: "0.3s",
      backgroundColor: "rgb(228, 228, 228)",
      padding: "18px",
      borderRadius: "10px",
      marginBottom: "20px",
      width: "35%"
  }
    return (
      <div className="container login" style={styleContainer}>
        <div className="row">
          <div className="col-md-12">
            <form>
              <input type="text" className="form-control" placeholder="login..."/>
            </form>
            <button className="btn btn-success">Login</button> 
            <p style={{textAlign: "center", color: "rgb(241, 160, 151)"}}>{this.state.info ? null : "click on the button to login!"}</p>
            <button className="btn btn-info" style={{margin: "0 auto", display: "block", width: "30%" }} onClick={this.toggleInfo}>{this.state.info ? "Show info" : "Hide info"}</button>
          </div>
        </div>
      </div>
    );
  }   
}
export default LoginScreen;