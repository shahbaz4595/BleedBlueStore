import './CheckoutCard.css';

export const CheckoutCard = ({ checkoutDetails }) => {
  const { itemCount, totalAmount, discount, deliveryCharge } = checkoutDetails;
  const finalAmount = totalAmount - discount - deliveryCharge;
  return (
    <div className="cart-details">
      <div className="card card-cart-details">
        <div className="flex-row align-center justify-between">
          <label>Price ({itemCount}) </label>
          <label>Rs. {totalAmount}</label>
        </div>

        <div className="flex-row align-center justify-between">
          <label>Discount</label>
          <label>Rs. {discount}</label>
        </div>

        <div className="flex-row align-center justify-between">
          <label>Delivery Charges</label>
          <label>Rs. {deliveryCharge}</label>
        </div>

        <div className="flex-row align-center justify-between">
          <h6>Total Amount</h6>
          <label>Rs. {finalAmount}</label>
        </div>
        <button className="btn btn-primary full-width">Place Order</button>
      </div>
    </div>
  );
};
