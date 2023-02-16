const navbar = () => {
  return `<div id="topnav">
    <div id="topbtn">
        <div id="usic">
            <img style="width:10px;height:10px;" src="https://cdn-icons-png.flaticon.com/128/323/323310.png" alt="">
            <p>us-USD</p>
        </div>
        <div id="idhelpnav">Help</div>
    </div>
</div>
<div id="middlenav">
    <a href="./index.html">
   <img src="../images/logo.png">
    </a>
    <div id="serachkaro">
      <div class="dropdown">
        <div id="serachkaro" class="dropbtn">
            <input id="serachnosarchiyo" type="text" placeholder="Search for a product or brand...">
            <button id="serchiyanubuuton"><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div class="dropdown-content">
            <div id="serachdata"></div>
          </div>
        </div>
    </div>
    <div id="acc_cart">
        <div id="account">
            <div class="dropdown">
                <button class="dropbtn">
                    <i class="fa-regular fa-user"></i><span>Account</span>
                </button>
                <div class="dropdown-content">
                  <div id="mainacc">
                  <div id="lrmenu">
                    <button id="loginacc"><a href="./login.html">Login</a></button>
                    <button id="regtoop"><a href="./registration.html">Singup</a></button>
                    </div>
                    <div id="otheracc">
                      <div>Wishlist</div>
                      <div>Your Orders</div>
                      <div>Your Referrals</div>
                    </div>
                  </div>
                </div>
              </div> 
            
        </div>
        <div id="cartmenus"></div>
        <div class="dropdown">
            <button id="svgcart" class="dropbtn">
                <svg class="responsiveFlyoutBasket_icon responsiveFlyoutBasket_icon-basket" width="24" height="24" >
                    <path d="M6.57412994,10 L17.3932043,10 L13.37,4.18336196 L15.0021928,3 L19.8438952,10 L21,10 C21.5522847,10 22,10.4477153 22,11 C22,11.5522847 21.5522847,12 21,12 L17.5278769,19.8122769 C17.2068742,20.534533 16.4906313,21 15.7002538,21 L8.29974618,21 C7.50936875,21 6.79312576,20.534533 6.47212308,19.8122769 L3,12 C2.44771525,12 2,11.5522847 2,11 C2,10.4477153 2.44771525,10 3,10 L4.11632272,10 L9,3 L10.6274669,4.19016504 L6.57412994,10 Z M5.18999958,12 L8.29999924,19 L15.6962585,19 L18.8099995,12 L5.18999958,12 Z"></path>
                  </svg> <span id="cartt"><a href="./cart.html"><p id="cartt">cart</p></a></span>
            </button>
            <div class="dropdown-content">
               <div id="cartcontent">There are currently no items in your cart.</div>
            </div>
          </div> 

    </div>
</div>
<hr style="height: 1.5px;background-color: black;">
<div id="bottomnav">
  <div>Brands</div>
  <div><a href="./Holiday.html">Holidays</a></div>
  <div id="salariya">Sale
    <div class="mydrop" id="saledrop">
      <div><h2>$</h2><p>Sale</p></div>
      <div>Key Workers Discount</div>
      <div>Refer A Friend</div>
      <div><img src="https://s1.thcdn.com/navigation/121/2019/11/2918246-200-20191108.png" alt=""> <p>Clearance</p></div>
      <div><img src="https://s1.thcdn.com/navigation/121/2019/09/Webp.net-resizeimage_%284%29-20190927.jpg" alt=""> <p>Gift And Sets</p></div>
      <div><img src="https://s1.thcdn.com/navigation/121/2019/07/Coupon-20190718.jpg" alt=""><p>All Coupons</p></div>
      <div><img src="https://s1.thcdn.com/navigation/121/2019/08/Label-20190803-20190803.png" alt=""><p>Fetured Offers</p></div>
    </div>
  </div>
  <div><a href="./AllSkincare.html">Skin Care</a></div>
  <div>Hair</div>
  <div>Makeup</div>
  <div>Bath & Body</div>
  <div>Fragrance</div>
  <div>Self Care</div>
  <div>Tools</div>
  <div>New & Trending</div>
  <div>Build a Routine</div>
  <div id="salariya">Advice
    <div class="mydrop" id="saledrop">
      <div><a href="Skincare.html">Skin care</a></div>
      <div><a href="Makeup.html">Makeup</a></div>
      <div><a href="Haircare.html">Haircare</a></div>
      <div><a href="Body.html">Body</a></div>
      <div>Tip & Advice</div>
      <div>Beuaty Center</div>
      <div>Free Beauty Consulataions</div>
    </div>
  </div>
</div>`
}

export default navbar;