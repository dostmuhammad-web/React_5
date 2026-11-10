"use client";
import  { useState } from "react";
import "./page.css";

function Cart() {
    let [count, setCount] = useState(1);
  return (
    <div className="container">
      <h1>My Cart</h1>
      <h3>Let’s create your account</h3>

      <div className="Cards">

        <div className="Card__card">
         
         <img src="image6.png" alt="" />

          <div className="Card__info">
            <h2>2 Pieces Mango set- Regular fit</h2>
            <p>Color: </p>
          </div>

          <span className="price">$25.99</span>

          <div className="quantity">
            <button onClick={()=>setCount(count + 1)}>+</button>
            <p>{count}</p>
            <button onClick={()=>setCount(count - 1)}>-</button>
          </div>

          <span className="price">$25.99</span>

          <button className="delete1">🚮


          </button>
        </div>


        <div className="Card__card">
         
        <img src="image7.png" alt="" />
          <div className="Card__info">
            <h2>3 Pieces Mango set- Casual fit</h2>
            <p>Color: </p>
          </div>

          <span className="price">$32.99</span>

          <div className="quantity">
          <button onClick={()=>setCount(count + 1)}>+</button>
            <p>{count}</p>
            <button onClick={()=>setCount(count - 1)}>-</button>
          </div>

          <span className="Price">$32.99</span>

          <button className="delete">🚮

          </button>
        </div>


        <div className="Card__card">
        <img src="image8.png" alt="" />

          <div className="Card__info">
            <h2>1 Zara Cardigan-Regular fit</h2>
            <p>Color:</p>
          </div>

          <span className="price">$40.25</span>

          <div className="quantity">
          <button onClick={()=>setCount(count + 1)}>+</button>
            <p>{count}</p>
            <button onClick={()=>setCount(count - 1)}>-</button>
          </div>

          <span className="total">$40.25</span>

          <button className="delete">🚮

          </button>
        </div>

      </div>
    </div>
  );
}

export default Cart;