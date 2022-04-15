import { useState, useEffect } from 'react';
import './ProductFilter.css';

export const ProductFilter = ({ isMobile }) => {
    
    return ( 

        <aside id="bb-product-filter" className="sidebar shadow-dark">
            <ul className="sidenav styled-list list-reset">
                <li className="flex-row align-center justify-between">
                    <p className="text-bold-weight">Filters</p>
                    <a id="bb-btn-clearFilter">Clear</a>
                </li>
                <li>
                    <p className="text-bold-weight">Price</p>
                    <div className="price-range-container">
                        <div className="text-sm-size" id="bb-price-value"></div>
                        <input id="bb-price-range" className="price-range" name="price" type="range" step="500" min="500" max="5000" value="4000"/>
                    </div>
                </li>
                <li>
                    <p className="text-bold-weight">Category</p>
                    <div>
                        <input type="checkbox" id="bb-chk-men" className="clickable" name="men" value="Men"/>
                        <label for="bb-chk-men">Men</label>
                    </div>

                    <div>
                        <input type="checkbox" id="bb-chk-women" className="clickable" name="women" value="Women" />
                        <label for="bb-chk-women">Women</label>
                    </div>
                    <div>
                        <input type="checkbox" id="bb-chk-kids" className="clickable" name="kids" value="Kids"/>
                        <label for="bb-chk-kids">Kids</label>
                    </div>
                </li>
                <li>
                    <p className="text-bold-weight">Sort By</p>
                    <div>
                        <input type="radio" id="bb-rd-lowToHigh" className="clickable" name="sortBy" value="Low to High" checked/>
                        <label>Price - Low to High</label>
                    </div>
                    <div>
                        <input type="radio" id="bb-rd-highToLow" className="clickable" name="sortBy" value="High to Low"/>
                        <label>Price - High to Low</label>
                    </div>
                </li>
            </ul>
           {isMobile && <button id="bb-btn-filter-close" type="button" className="btn-close btn-filter-close" role="close filter">&times; </button>}
        </aside>

     );
}
 

