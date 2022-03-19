import ProductCard from "../cards/productCards/ProductCard";
import "./NewArrival.css";

const NewArrival = ({ products }) => {
  return (
    <section id="arrived-now" className="gutter-vh-xl">
      <h5 className="text-center">Arrived Now</h5>
      <div className="category-container">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </section>
  );
};

export default NewArrival;
