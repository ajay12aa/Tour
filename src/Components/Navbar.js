import "./NavbarStyles.css"
import {Link} from "react-router-dom"
import React, { Component } from 'react'
import {Menuitems} from "./Menuitems"
 class Navbar extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       clicked:false,
       myname:"nav-menu"
    }
  }
  
 
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked});
    this.setState({ myname: this.state.myname === "active" ? "nav-menu" : "active" });
    console.log(this.state.myname)

    
  }
  

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-log">Trippsy</h1>
        <div className="menu-icons" onClick={this.handleClick} >
          <i  className={this.state.clicked? "fas fa-times": "fas fa-bars" }></i>
         
          
        </div>

        <ul className={this.state.myname}>
            {Menuitems.map((item,index)=>{
                return (
                    <li id={item.title} key={index}>
                      <Link className={item.cName} to={item.url}>
                         <i className={item.icon}></i>{item.title}
                         </Link>
                        </li>
                )
            })}
            
        </ul>

        <button  className="signupbtn">Sign up</button>



      </nav>
    )
  }
}

export default Navbar