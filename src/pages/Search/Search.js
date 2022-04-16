import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import Products from '../../components/Products/Products'


export default function Search() {
    const location = useLocation()
    const urlParams = new URLSearchParams(location.search)
    const searchByCategory = urlParams.get("category")
    const searchByTitle = urlParams.get("title")
    const [data,setData]=useState([])

    useEffect(()=>{
      if(searchByCategory!==null){
        async function category(){
          await fetch(`https://my-json-server.typicode.com/Atombuddy/e-commerce/products/?category=${searchByCategory}`)
           .then(response=>response.json())
           .then(data=>setData(data))    
        }
        category()
      }
      },[searchByCategory])
      
    useEffect(()=>{
      if(searchByTitle!==null){
        async function title(){
          await fetch(`https://my-json-server.typicode.com/Atombuddy/e-commerce/products/`)
          .then(response=>response.json())
          .then(data=>{
            setData(data)
            const tempProductsArr=[]
            for(const i of data){
              if(i.title.toLowerCase().match(searchByTitle.toLowerCase())){
                tempProductsArr.push(i)
              }
            }
            setData(tempProductsArr)
          })   
        }
        title()
        
      }
      },[searchByTitle])

  if(data.length===0){
    return(
      <h1 style={{display:"flex",justifyContent:"center",marginTop:"100px",width:"100%"}}>No Products Found</h1>
    )
  }  
  return (
      <Products products={data}/>
  )
}