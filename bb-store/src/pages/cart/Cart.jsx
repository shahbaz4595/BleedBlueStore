import { CartCards, CheckoutCard } from "../../BleedBlueStore";
import { useState } from "react";
import './Cart.css'; 

export const Cart = () => {
  const [cartProducts, setCartProducts] = useState([
    { product: "Indian Cricket Jersey", price: 2000, image: "/images/products/jersey.jpg", quantity: 1 },
    { product: "Indian Cricket Cap", price: 1000, image: "/images/products/cap.jpg", quantity: 1 },
    { product: "Indian Cricket Cap", price: 1000, image: "/images/products/cap.jpg", quantity: 1 },
    { product: "Indian Cricket Cap", price: 1000, image: "/images/products/cap.jpg", quantity: 1 },
  ]);
  const [checkoutDetails, setCheckoutDetails] = useState({itemCount:2, totalAmount: 3000, discount: 500, deliveryCharge: 50});

  return (
    <section className="page-container">
        <div className="cart-section">
      <div className="cart-item-container">
          {cartProducts && cartProducts.map((item)=>(
              <CartCards cartItem={item}/>
          ))}
      </div>
      <CheckoutCard checkoutDetails={checkoutDetails}/>
      </div>
    </section>
  );
};
