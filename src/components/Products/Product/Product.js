import { Card, CardMedia, Typography,Button,Chip} from '@material-ui/core'
import React from 'react'
import "./styles.css"
import { Star,ThumbUpAlt} from '@material-ui/icons'


function Product({product}) {

  const  handleClick=(product)=>{
    const products=localStorage.getItem("products")
    
    if(!products){
      const prodArr=[product]
      localStorage.setItem("products",JSON.stringify(prodArr))
    }
    else{
      const productArr=localStorage.getItem("products")
      const arr=JSON.parse(productArr)
      arr.push(product)
      localStorage.setItem("products",JSON.stringify(arr))  
    }
  }
  /*const  handleClick=(product)=>{
    const products=sessionStorage.getItem("products")
    
    if(!products){
      const prodArr=[product]
      sessionStorage.setItem("products",JSON.stringify(prodArr))
    }
    else{
      const productArr=sessionStorage.getItem("products")
      const arr=JSON.parse(productArr)
      arr.push(product)
      sessionStorage.setItem("products",JSON.stringify(arr))  
    }
  }*/

  return (
 
      <Card className="card">
        <CardMedia className='media' component="img" image={product.image} />
        <Chip label={`₹ ${product.price}`} size="small" className='priceChip' />
        <Typography className='title' >{product.title}</Typography> 
        <div className='rating'>
          <Chip className='starChip' label={product.rating.rate}/>
          <Star className='starIcon'/>
          <div className='rateCount'>
            {product.rating.count }<ThumbUpAlt className="thumbIcon"/>
          </div>
        </div>
        <Button variant="contained" className='cartButton' onClick={()=>handleClick(product)}>Add to Cart</Button>
      </Card>
  )
}

export default Product