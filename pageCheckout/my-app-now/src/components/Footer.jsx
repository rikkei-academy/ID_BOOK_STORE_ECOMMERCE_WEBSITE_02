function Footer() {
    return ( 
<>
  <footer>
    <div className="ft-top">
      <div className="ft-top-text">
        Subscribe our newsletter for newest books updates
      </div>
      <div className="ft-top-input">
        <input
          type="text"
          className="top-input"
          placeholder="Type your email here"
        />
        <button className="ft-top-btn">SUBSCRIBE</button>
      </div>
    </div>
    <div className="ft-bottom">
      <div className="categories">+ Books categories</div>
      <div className="list-ul-li">
        <ul>
          <li>Architecture</li>
          <li>Art</li>
          <li>Action</li>
          <li>Biography &amp; Autobiography</li>
          <li>Body, Mind &amp; Spirit</li>
        </ul>
        <ul>
          <li>Business &amp; Economics</li>
          <li>Children Fiction</li>
          <li>Children Non-Fiction</li>
          <li>Comics &amp; Graphic Novels</li>
          <li>Cooking</li>
        </ul>
        <ul>
          <li>Crafts &amp; Hobbies</li>
          <li>Design</li>
          <li>Drama</li>
          <li>Education</li>
          <li>Family &amp; Relationships</li>
        </ul>
        <ul>
          <li>Fiction</li>
          <li>Foreign Language Study</li>
          <li>Games</li>
          <li>Gardening</li>
          <li>Health &amp; Fitness</li>
        </ul>
        <ul>
          <li>History</li>
          <li>House &amp; Home</li>
          <li>Humor</li>
          <li>Literary Collections</li>
          <li>Mathematics</li>
        </ul>
        <ul>
          <li>Medical</li>
          <li>Nature</li>
          <li>Performing Arts</li>
          <li>Pets</li>
          <li style={{ color: "#EAA451", fontWeight: 550 }}>Show others</li>
        </ul>
      </div>
    </div>
  </footer>
  <div className="div-chia2">
    <div className="div-1">
      <img className="logosach" src="img/logologo-img.png" alt="" />
      <div className="div-1-text">
        Bookland is a Book Store Ecommerce Website Template by Peterdraw lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud
      </div>
      <div className="list-img-div1">
        <img src="img/social01.png" alt="" />
        <img src="img/social02 (1).png" alt="" />
        <img src="img/social03.png" alt="" />
        <img src="img/social04in.png" alt="" />
        <img src="img/social05.png" alt="" />
      </div>
    </div>
    <div className="div-2">
      <div className="div-2-text">Get in Touch With Us</div>
      <div className="wrapper-ttlh-img">
        <div className="wrapper-ttlh">
          <div className="sun-wrapper-ttlh">
            <img src="img/map-marker 1.png" alt="" />
            <div className="sun-text">
              832 Thompson Drive, San Fransisco CA 94107, United States
            </div>
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
          <img
            src="https://firebasestorage.googleapis.com/v0/b/newproject-96c27.appspot.com/o/c623c3f3-c099-494d-97e0-8358973e252c.jpeg?alt=media&token=49785e2c-2e1a-4c18-b376-412961809e91"
            alt=""
            className="div-2-img"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="foot-sticky">
    <div>
      Bookland Book Store Ecommerce Website - © 2020 All Rights Reserved
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      Made with{" "}
      <div style={{ margin: "0 2px", color: "red", fontSize: 20 }}>♥</div> by
      Peterdraw
    </div>
  </div>
</>

     );
}

export default Footer;