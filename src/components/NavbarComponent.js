import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import UserScreen from '../screens/UserScreen';
import styles from './NavbarComponent.module.css';




 

class NavbarComponent extends Component {
  render() {
    return (

//ROBIN HELP! I DONT KNOW HOW TO DEAL WITH CLASSES I CANT ADD THE CLASS TO THE MODULE CSS IT WONT BE APPLIED IT IS OVERWRITTEN BY STYLEA
      <Router>
      
      <nav className={styles.styleNavbar}> 
        <NavLink to="/" className={styles.styleA} activeStyle={{color: "rgb(199, 197, 197)" }} exact>Login</NavLink> 
        <NavLink to="/Dashboard" className={styles.styleA} activeStyle={{color: "rgb(199, 197, 197)" }}>Dashboard</NavLink>
        <NavLink to="/User" className={styles.styleA} activeStyle={{color: "rgb(199, 197, 197)" }}>User</NavLink>
      </nav>

      <Route exact path="/" component={LoginScreen}/>
      <Route path="/Dashboard" component={DashboardScreen}/>
      <Route path="/User" component={UserScreen}/>
    
  
      </Router>  
    )
  }   
}
export default NavbarComponent;