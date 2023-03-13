function Checkout() {
    return (  
      <div className="checkoutPage">
      <div className="summary">
        <div className="checktron1">
          <img src="checkout.img/passed.png" alt="" />
        </div>
        <div className="shopping">Shopping Summary</div>
        <div className="checktron-yellow">
          <img
            className="checktron-yellow-child"
            src="checkout.img/line.png"
            alt=""
          />
          <img
            className="checktron-yellow-last"
            src="checkout.img/passed (1).png"
            alt=""
          />
        </div>
        <div>checkout</div>
        <div className="checktron-white">
          <img
            className="checktron-yellow-child"
            src="checkout.img/line (1).png"
            alt=""
          />
          <img
            className="checktron-yellow-last"
            src="checkout.img/passed (1).png"
            alt=""
          />
        </div>
        <div>Payament</div>
        <div className="checktron-white">
          <img
            className="checktron-yellow-child"
            src="checkout.img/line (1).png"
            alt=""
          />
          <img
            className="checktron-yellow-last"
            src="checkout.img/passed (1).png"
            alt=""
          />
        </div>
        <div>Shipping</div>
      </div>
      <div className="wrapper-chuto">
        <div className="chuto">Buyer Info</div>
        <div className="chuto">Payment</div>
      </div>
      <div className="checkout-validate">
        <div className="validate-left ">
          <div className="wrapttinput">
            <div className="nameinput">First Name</div>
            <input type="text" />
          </div>
          <div className="wrapttinput">
            <div className="nameinput">Last Name</div>
            <input type="text" />
          </div>
          <div className="wrapttinput large">
            <div className="nameinput">Email Address</div>
            <input type="text" />
          </div>
          <div className="wrapttinput">
            <div className="nameinput">Mobile Phone Number</div>
            <input type="text" />
          </div>
          <div className="wrapttinput">
            <div className="nameinput">Address</div>
            <input type="text" />
          </div>
          <div className="wrapttinput">
            <div className="nameinput">STATE</div>
            <input type="text" />
          </div>
          <div className="wrapttinput">
            <div className="nameinput">Postcode/ZIP</div>
            <input type="text" />
          </div>
          <div className="wrapttinput">
            <div className="nameinput">Town/City</div>
            <input type="text" />
          </div>
          <div className="wrapttinput large">
            <div className="nameinput">Note</div>
            <input type="text" />
          </div>
        </div>
        <div className="validate-right">
          <div className="wraper-card1">
            <div className="block-card">
              <img src="checkout.img/transfer 1.png" alt="" />
              <div>Bank Transfer</div>
            </div>
            <div className="block-card yellow">
              <img src="checkout.img/atm-card 1.png" alt="" />
              <div>Credit Card</div>
              <input type="checkbox" defaultChecked="" />
            </div>
            <div className="block-card">
              <img src="checkout.img/paypal (1) 1.png" alt="" />
              <div>Paipal</div>
            </div>
          </div>
          <div className="wrakl">
            <div className="nameiinput">
              <div>NAME ON CARD</div>
              <input type="text" />
            </div>
            <div className="nameiinput bay">
              <div>NAME ON CARD</div>
              <input type="text" />
            </div>
            <div className="nameiinput ba">
              <div>CVV</div>
              <input type="text" />
            </div>
          </div>
          <button>PLACE ORDER</button>
        </div>
      </div>
      <div className="giongslice">
        <div className="giong-bao">
          <img src="checkout.img/icon (1).png" alt="" />
          <div className="text-to">Quick Delivery</div>
          <div className="text-nho">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
          </div>
        </div>
        <div className="giong-bao">
          <img src="checkout.img/icon (2).png" alt="" />
          <div className="text-to">Quick Delivery</div>
          <div className="text-nho">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
          </div>
        </div>
        <div className="giong-bao">
          <img src="checkout.img/icon (3).png" alt="" />
          <div className="text-to">Quick Delivery</div>
          <div className="text-nho">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
          </div>
        </div>
        <div className="giong-bao">
          <img src="checkout.img/icon (4).png" alt="" />
          <div className="text-to">Quick Delivery</div>
          <div className="text-nho">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
          </div>
        </div>
      </div>
    </div>
    
    );
}

export default Checkout;