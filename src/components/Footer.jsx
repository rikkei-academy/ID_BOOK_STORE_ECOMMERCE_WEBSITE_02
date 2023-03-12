import React from 'react';
import "./Footer.css"

import { Row, Col } from 'antd';

const menu=[
  {name:"Architecture"},
  {name:"Art"},
  {name:"Action"},
  {name:"Biography &amp; Autobiography"},
  {name:"Body, Mind &amp; Spirit"},
  {name:"Business &amp; Economics"},
  {name:"Children Fiction"},
  {name:"Children Non-Fiction"},
  {name:"Comics &amp; Graphic Novels"},
  {name:"Cooking"},
  {name:"Crafts &amp; Hobbies"},
  {name:"Design"},
  {name:"Drama"},
  {name:"Education"},
  {name:"Family &amp; Relationships"},
  {name:"Fiction"},
  {name:"Foreign Language Study"},
  {name:"Games"},
  {name:"Gardening"},
  {name:"Health &amp; Fitness"},
  {name:"History"},
  {name:"House &amp; Home"},
  {name:"Humor"},
  {name:"Literary Collections"},
  {name:"Mathematics"},
  {name:"Medica"},
  {name:"Nature"},
  {name:"Performing Arts"},
  {name:"Pets"},
  {name:"Show Other"}
]

const Footer=()=>{
    return(
        <>
             
        <footer>
          <div className="ft-top">
            <div className="ft-top-text">Subscribe our newsletter for newest books updates</div>
            <div className="ft-top-input">
              <input type="text" className="top-input" placeholder="Type your email here" />
              <button className="ft-top-btn">SUBSCRIBE</button>
            </div>
          </div>
          <div className="ft-bottom">
            <div className="categories">+ Books categories</div>
               
               <div className='list_grid'>
               <Row gutter={[25,10]}>
              {menu.map((item,i)=>{
                return(
                  <Col key={i} className='col' xs={24} sm={12} md={6} lg={6} xl={6} xxl={4}>
                  <p id={`child${i}`} className='child_list'>{item.name}</p>
                </Col>
                )
               
              })}
              
              

             
                  
            </Row>
               </div>
            
            
          </div>
        </footer>
        <div className="div-chia2">
          <div className="div-1">
            <img className="logosach" src="./footer/logologo-img.png" alt="" /><br />
            <span className="div-1-text">Bookland is a Book Store Ecommerce Website Template by Peterdraw lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</span>
            <div className="list-img-div1">
              <img src="./footer/social01.png" alt="" />
              <img src="./footer/social02 (1).png" alt="" />
              <img src="./footer/social03.png" alt="" />
              <img src="./footer/social04in.png" alt="" />
              <img src="./footer/social05.png" alt="" />
            </div>
          </div>
          <div className="div-2">
            <div className="div-2-text">Get in Touch With Us</div>
            <div className="wrapper-ttlh-img">
              <div className="wrapper-ttlh">
                <div className="sun-wrapper-ttlh">
                  <img src="img/map-marker 1.png" alt="" />
                  <div className="sun-text">832  Thompson Drive, San Fransisco
                    CA 94107, United States</div>
                </div>
                <div className="sun-wrapper-ttlh">
                  <img src="img/phone (2) 1.png" alt="" />
                  <div className="sun-text">+123 345123 556</div>
                </div>
                <div className="sun-wrapper-ttlh">
                  <img src="img/mail 1.png" alt="" />
                  <div className="sun-text">support@bookland.id</div>
                </div>
              </div>
              <div className="ql-img">
                <img src="https://firebasestorage.googleapis.com/v0/b/newproject-96c27.appspot.com/o/c623c3f3-c099-494d-97e0-8358973e252c.jpeg?alt=media&token=49785e2c-2e1a-4c18-b376-412961809e91" alt="" className="div-2-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="foot-sticky">
          <div>Bookland Book Store Ecommerce Website -   © 2020 All Rights Reserved</div>
          <div> <span>Made with <span className='heart'>♥️</span>  by Peterdraw</span></div>
        </div>
      

        </>
    )
}
export default Footer;