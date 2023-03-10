import React from 'react'
import "./Navbar.css"
import {MenuOutlined} from "@ant-design/icons"
import { Dropdown, Space } from 'antd'

const items= [
  {
    key:1,
    label: (
      <div className="menu_navbar_drop">
        <p>Menus</p>
        <div id="icon_menu">
          <img src="./navbar/Vector.png" alt="icon menu" />
        </div>
      </div>
  )
  },
  {
    key: 2,
    label: (
      <div className="search_navbar_drop">
        <input placeholder="Search book here --" />
        <img id="icon_search_drop" src="./navbar/layer1.png" alt="" />
      </div>
    )
  },
]
const Navbar=()=>{
    return(
        <>
         <div className="conteiner_navbar">
         <Dropdown
    menu={{
      items,
    }}
  >
    <div className='menu_navbar_media' onClick={(e) => e.preventDefault()}>
      <Space>
     <p className='icon_bar'>  <MenuOutlined /></p> 
      </Space>
    </div>
  </Dropdown>
          
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