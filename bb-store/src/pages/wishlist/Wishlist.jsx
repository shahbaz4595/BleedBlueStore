import { useState, useEffect } from "react";
import { ProductCard } from "../../BleedBlueStore";
import data from '../../data/data.json';

export const Wishlist = () => {
    const [products, setProducts] = useState(data.products);
    return ( 
        <section className="page-container">
            <div className="category-container">
            {products.length > 0 &&
            products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
        </section>
     );
}
 
