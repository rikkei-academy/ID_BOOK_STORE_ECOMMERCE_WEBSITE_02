import "./Content.css"
function Content() {
    return ( 
        <div className="content">
        <div className="heading">
          <p className="best_seller_content">BEST SELLER</p>
          <p className="thing_grow"> Think anh Grow Rich </p>
          <div className="business">
            <p>Napoleon Hill</p>
            <p>Business &amp; Strategy</p>
          </div>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusantium cumque est? At minima aperiam, ratione iure quos praesentium asperiores assumenda tempora exercitationem alias numquam reiciendis placeat ipsa blanditiis labore!</span>
          <div className="price_content">
            <p className="new_price_content">$9.5</p>
            <p className="old_price_content">$12</p>
            <p className="sale_off_content">20% OFF</p>
          </div>
          <div className="button_content">
            <button id="buy_now_content">Buy now</button>
            <button id="see_detail_content">See Details</button>
          </div>
        </div>
        <div className="our_partner">
          <p>Our Partner</p>
          <div className="our_partner_bot">
            <p><img className="icon_partner" src="./content/Vector.png" alt="" />Highlow</p>
            <p><img className="icon_partner" src="./content/a.png" alt="" />majine</p>
            <p><img className="icon_partner" src="./content/Vector (1).png" alt="" />GlowUp</p>
          </div>
        </div>
      </div>
     );
}

export default Content;