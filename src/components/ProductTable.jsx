import React from 'react';

import ProductRow from "./ProductRow"
export default function ProductTable(props){

    const {products} = props

    return(
        
<div>
        <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody> 
       { products.map((product)=> {
            return(
          <ProductRow product={product}/>
         )
        })}
        

        </tbody>
      </table>
    </div>
</div>
    )

}