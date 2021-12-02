import React from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from 'react';

export default function FilterableProductTable(props){
    const {products} = props
    const [productItems, setProductItems] = useState(props);
    const [filteredProduct, setFilteredProduct] = useState(props);

    
    
    
    function handleFilterProduct(string) {
        console.log(string)
        if (string === "") {
          setProductItems(productItems);
        } else {
          setFilteredProduct(
            productItems.filter((product) =>
              product.name.toLowerCase().includes(string.toLowerCase())
            )
          );
        }
      }
    
    
    return(
        <div>
        <SearchBar filterProduct={handleFilterProduct} />
        <ProductTable products={products}/>

        </div>
    )

}