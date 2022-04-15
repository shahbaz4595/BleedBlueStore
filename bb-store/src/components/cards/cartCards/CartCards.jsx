import './CartCards.css';

export const CartCards = ({ cartItem }) => {

    const { product, price, image, quantity } = cartItem;
  return (
    <div className="card card-horizontal">
      <div className="card-image-horizontal">
        <img
          className="img-responsive"
          src={image}
          loading="lazy"
          alt={product}
        />
      </div>
      <div className="card-description flex-column justify-around">
        <div className="gutter-vh-sm">
          <p className="card-title">{product} </p>
          <p className="text-rg-size primary-text">by BleedBlue</p>
          <p>
            
            <span>Price:</span> {price} Rs.
          </p>
        </div>
        <div className="flex-row flex-wrap align-center justify-between">
          <label>Quantity: </label>
          <button className="btn btn-item-quantity">-</button>
          <input
            className="form-field field-item-quantity"
            type="number"
            value={quantity}
          />
          <button className="btn btn-item-quantity">+</button>
        </div>
        <div className="card-cta flex-row flex-wrap gap-lg align-center gutter-vh-sm">
          <button type="button" className="btn btn-primary">
            <span className="padder-hz-xs">
              <i className="fas fa-trash"></i>
            </span>
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
};
