import React from 'react'
import "./Navbar.css"
const Navbar=()=>{
    return(
        <>
         <div className="conteiner_navbar">
        <div className="left_navbar">
          <div className="logo_navbar">
            <img id="logo1" src="./navbar/logo (2).png" alt="logo" />
            <img id="logo2" src="./navbar/Vector (1).png" alt="" />
          </div>
        </div>
        <div className="center_navbar">
          <div className="menu_navbar">
            <p>Menus</p>
            <div id="icon_menu">
              <img src="./navbar/Vector.png" alt="icon menu" />
            </div>
          </div>
          <div className="search_navbar">
            <input placeholder="Search book here --" />
            <img id="icon_search" src="./navbar/layer1.png" alt="" />
          </div>
        </div>
        <div className="right_navbar">
          <button id="login">Login </button> 
          <button id="signup">Sign Up </button>    
        </div>
      </div>

        </>
    )
}
export default Navbar