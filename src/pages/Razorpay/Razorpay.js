import React from 'react'
//import "https://checkout.razorpay.com/v1/checkout.js"
import {useLocation,useNavigate } from 'react-router-dom';
import "razorpay-checkout"

export default function RazorpayCheck() {
  
    alert("Use '4111 1111 1111 1111' as Card Number to test the Card.")
    /*const data=await fetch("http://localhost:4000/razorpay",{method:"POST"})
                .then((t)=>t.json())*/
    
    const location = useLocation()
    const urlParams = new URLSearchParams(location.search)
    const price = urlParams.get("price")

    const navigation=useNavigate()

    const currency="INR"  
    const amount=price*100
    var options = {
    "key": "rzp_test_Rk1Z4keHMYy91P", 
    "currency":currency,
    "amount":amount,
    "image":"https://thumbs.dreamstime.com/b/ecommerce-icon-special-red-square-button-isolated-abstract-illustration-103964060.jpg",
    "name": "Subscribe",
    "description": "Thank you for Subscribing",
    "handler": function (response){
        alert("Order Successful")
        navigation("/")
    },theme:{
        color:"#fc6b03"
    }
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  return (
    <div></div>
  )
}