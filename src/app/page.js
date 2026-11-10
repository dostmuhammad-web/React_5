import LoginForm from "./Components/LoginForm";
import Navbar from "./Components/Navbar"
import "./style.css";
import "./Components/Footer.css"


export default function Home() {
  return (
    <div className="home container">
      <div className="home__header">
      <h1 className="home__title">UNITED DEALS</h1>
       <img src="image1.png" alt="img" className="home__logo" />
      <input type="" placeholder="🔍Search essentials, groceries and more..." />
       <h4 className="home__subtitle">My Deals</h4>
       <img src="images.png" alt="img" className="home__icon" />
   
       <h4 className="home__subtitle">Sign Up/Sign In</h4>
       <h4 className="home__subtitle">🛒Cart</h4>
       <div className="home__cart">
       </div>
     </div>
     <div className="home__banner">
      <div className="home__categories">
    <p className="p">Groceries</p>
      <p className="p">Premium Fruits   v</p>
      <p className="p">Home & Kitchen</p>
      <p className="p">Fashion</p>
      <p className="p">Electronics</p>
      <p className="p">Beauty</p>
      <p className="p">Home Improvement</p>
      <p className="p"  >Sports, Toys & Luggage</p>
      </div>
          <h1/>Back<h1/>
          <h1></h1>
          
     </div>

<Navbar/>

      <LoginForm />























<div className="Cart__footer">

<div className="Cart__footer_Child">
      <h1 className="">United Deal</h1>

<p>Customer Supports:</p>
<h3>(629) 555-0129</h3>
<p>4517 Washington Ave. Manchester, Kentucky 39495</p>
<p>info@kinbo.com</p>
</div>

<div className="Cart-footer2">
      <h1>Top Category</h1>

<p>Computer & Laptop</p>
<h3>SmartPhone</h3>
<p>Headphone</p>
<p>Accessories</p>
<p>Camera & Photo</p>
<p/>TV & Homes<p/>
<p>Browse All Product</p>
</div>

<div className="Cart__footer3">
      <h1>Quick links</h1>
<p/>Shop Product<p/>
<h3/>Shoping Cart<h3/>
<p/>Wishlist<p/>
<p/>Compare<p/>
<p/>Track Order<p/>
<p/>Customer Help<p/>
<p/>About Us<p/>


</div>

</div >
</div> 
     
  )
}
