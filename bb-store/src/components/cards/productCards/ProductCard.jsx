import './ProductCard.css';

const ProductCard = ({ product }) => {
    return ( 
        <div className="card card-vertical card-vertical-thin">
                        <div className="card-image-vertical">
                            <img className="img-responsive" src={product.image} loading="lazy" alt={product.imageName}/>
                        </div>
                        <div className="card-description flex-column justify-around padder-hz-sm">
                            <div>
                                <p className="card-title"> {product.productName} </p>
                                <p className="text-rg-size primary-text">by {product.vendorName}</p>
                                <p> <span>Price:</span> {product.price} Rs.</p>
                            </div>
                            <p> {product.productDescription} </p>
                            <div className="card-cta flex-row gap-lg align-center justify-between gutter-vh-sm">
                                <a><i className="far fa-heart text-lg-size" title="Add to wishlist"></i></a>
                                <button className="btn btn-primary"><span className="padder-hz-xs"><i className="fas fa-shopping-cart"></i></span>Add to Cart</button>
                            </div>
                        </div>
                    </div>
     );
}
 
export default ProductCard;