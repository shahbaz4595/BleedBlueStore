import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { image, imageText, productName, vendor, price, productDescription } =
    product;

  return (
    <div className="card card-vertical card-vertical-thin">
      <div className="card-image-vertical">
        <img
          className="img-responsive"
          src={image}
          loading="lazy"
          alt={imageText}
        />
      </div>
      <div className="card-description flex-column justify-around padder-hz-sm">
        <div>
          <p className="card-title"> {productName} </p>
          <p className="text-rg-size primary-text">by {vendor}</p>
          <p>
            <span>Price:</span> {price} Rs.
          </p>
        </div>
        <p> {productDescription} </p>
        <div className="card-cta flex-row gap-lg align-center justify-between gutter-vh-sm">
          <a>
            <i
              className="far fa-heart text-lg-size"
              title="Add to wishlist"
            ></i>
          </a>
          <button className="btn btn-primary">
            <span className="padder-hz-xs">
              <i className="fas fa-shopping-cart"></i>
            </span>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};


