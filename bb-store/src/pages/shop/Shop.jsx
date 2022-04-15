import './Shop.css';
import data from '../../data/data.json';
import { ProductFilter, ProductCard } from '../../BleedBlueStore';
import { useState, useEffect } from "react";


export const Shop = () => {
    const [products, setProducts] = useState(data.products);
    const [isMobile, setIsMobile] = useState(false);
    const [showFilter, setShowFilter] = useState(false);

    const showFilterForMobile = () => {
       setShowFilter(true);
    }
    
    const handleResize = () => {
        if (window.innerWidth < 755) {
            setIsMobile(true);
            setShowFilter(false);
        }
        else {
            setIsMobile(false);
            setShowFilter(true);
        }
    }

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
    })

    useEffect(() => {
        handleResize();
    },[]);

    return ( 
            
            <div className="product-grid-container">
            { showFilter &&
            <ProductFilter isMobile={isMobile}/> }
            <div  className="category-container product-listing">
            {products.length > 0 &&
            products.map((product) => (
            <ProductCard product={product} key={product.id} />
            ))}        
            </div>
            {isMobile && <div className="btn-product-filter">
            <a onClick={showFilterForMobile} className="btn btn-float"><i className="far fa-filter"></i></a>
        </div>}
            </div>
        
    );
}
 
