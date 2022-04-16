import React from 'react'
import Product from "./Product/Product"
import { Grid} from '@material-ui/core';
import "./styles.css"

export default function Products({products}) {
    

    return (
            <Grid className="postContainer" container spacing={4}>
                {products.map((product)=>(
                    <Grid key={product.id} item md={3} xs={12}>
                        <Product product={product} />
                    </Grid>
                ))}  
            </Grid>
    );
}
