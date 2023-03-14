import React from 'react'
import "./Navbar.css"
import {MenuOutlined} from "@ant-design/icons"
import { Dropdown, Space } from 'antd'
import { Link } from 'react-router-dom'

const items= [
  {
    key:1,
    label: (
      <div className="menu_navbar_drop">
        <p>Menus</p>
        <div id="icon_menu_drop">
          <img src="./navbar/Vector.png" alt="icon menu" />
        </div>
      </div>
  )
  }
  
]
 /* const menu=(
  <Menu>
    <Menu.Item>
    <div className="menu_navbar_drop">
        <p>Menus</p>
        <div id="icon_menu_drop">
          <img src="./navbar/Vector.png" alt="icon menu" />
        </div>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div className="search_navbar_drop">
          <input placeholder="Search book here --" />
        <img id="icon_search_drop" src="./navbar/layer1.png" alt="" />
      </div>
    </Menu.Item>
  </Menu>
 ) */
const Navbar=()=>{
    return(
        <>
         <div className="conteiner_navbar">
         <Dropdown className='drop_down'trigger={['click']}
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
            <input  placeholder="Search book here --" />
            <img id="icon_search" src="./navbar/layer1.png" alt="" />
          </div>
        </div>
        <div className="right_navbar">
         <Link to={"/login"}><button  id="login">Login </button></Link>  
          <Link to={"/register"}><button id="signup">Sign Up </button></Link>    
        </div>
      </div>

        </>
    )
}
export default Navbar