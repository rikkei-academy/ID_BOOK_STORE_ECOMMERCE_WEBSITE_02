function Header() {
    return ( 
        <>
        <header>
  <div className="logo-img">
    <div>
      <img src="img/logologo-img.png" alt="" />
    </div>
  </div>
  <div className="input-center">
    <div className="menu">
      Menus <img src="img/right-chevron (1) 1.png" alt="" />
    </div>
    <div className="ql-input">
      <input type="text" placeholder="Search books here" />
      <img src="img/search (2) 1.png" alt="" />
    </div>
  </div>
  <div className="header-right">
    <div className="icon2">
      <i className="fa-regular fa-heart" />
      <i className="fa-solid fa-cart-shopping" />
      <img className="imguser" src="img/khunglong.jpg" alt="" />
      <div className="tt-user">
        <div className="nameUser">Brian</div>
        <div className="email-user">briancorner@mail.com</div>
      </div>
      <img className="img-header" src="img/right-chevron (1) 1.png" alt="" />
    </div>
  </div>
</header>

        </>
     );
}

export default Header;