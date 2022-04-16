import { Grid, Typography,Button } from '@material-ui/core'
import React, { useState } from 'react'
import ProductCheckout from './ProductCheckout'
import { Link } from 'react-router-dom'
import "./styles.css"

export default function Checkout() {

  const products=JSON.parse(localStorage.getItem("products"))
  const price=Number(localStorage.getItem("price"))
  const [map]=useState(new madeMap())

  if(products===null){
    return <h1 style={{display:"flex",justifyContent:"center",marginTop:"100px",width:"100%"}}>Your Cart is Empty.</h1>
  }

  let sum=0
  for(let i=0;i<products.length;i++){
    sum+=products[i].price
  }
  sum=sum.toFixed(2)
  if(!price){
    localStorage.setItem("price",sum)
  }
  else{
    sum+=price
    localStorage.setItem("price",sum)
  }

  
  function madeMap() {
    var keys = [], values = [];

    return {
      put: function (key, value) {
            var index = keys.indexOf(key);
            if(index === -1) {
                keys.push(key);
                values.push(value);
            }
            else {
                values[index] = value;
            }
        },
        get: function (key) {
            var index = keys.indexOf(key);
            if(index===-1) return -1;
            return values[index];
        },
        keys:function(){
          return keys;
        },
        values:function(){
          return values;
        },
        length:function(){
          return values.length;
        }
        /*remove:function(idx){
          const currIdx=keys.indexOf(idx)
      
          if(values[currIdx][0]>1){
            values[currIdx][0]-=1
          }
          else{
            keys.splice(currIdx,1)
            values.splice(currIdx,1)
          }
          console.log("ig",currIdx,values[currIdx])
        }*/
    };
}





  for(let i=0;i<products.length;i++){
    if(map.get(products[i].id)===-1){
      map.put(products[i].id,[1,products[i]])
    }
    else{
      const currValue=map.get(products[i].id)[0]
      map.put(products[i].id,[currValue+1,products[i]])
    }
  }
  
 
  return (
    <Grid container className='cartGrid'>
      {map.keys().map((product)=>(
                    <Grid key={product.id} item md={12} xs={12} className="cartGridItem">
                        <ProductCheckout product={map.get(product)[1]} qty={map.get(product)[0]}/>
                    </Grid>
      ))}
      
      <div className='checkout'>
        <Typography className="cartTotal">Total&nbsp;&nbsp;</Typography>
        <Typography className='cartPrice' >₹&nbsp;{sum}</Typography>
      </div>
      <Button className="checkoutButton" component={Link} to={`/razorpay/?price=${sum}`}>Proceed to Checkout</Button>
    </Grid>
  )
}