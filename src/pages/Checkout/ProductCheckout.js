import React from 'react'
import { Card,Typography,Chip,CardMedia,Button, Grid } from '@material-ui/core'
import "./styles.css"

export default function ProductCheckout({map,product,qty}) {

 

  return (
    <Card className='cartCard'>
      <Grid item xs={2}>
        <CardMedia className='cartMedia' component="img" image={product.image} />
        </Grid>
        <Grid item xs={10} className="prodDesc">
        <Typography className='cartTitle' >{product.title}</Typography> 
        <Chip label={`₹ ${product.price}`} size="small" className='cartPriceChip' />
        <Chip label={`Qty:${ qty}`} size="small" className='prodQty'/>
        
        </Grid>
       
      </Card>
  )
}

