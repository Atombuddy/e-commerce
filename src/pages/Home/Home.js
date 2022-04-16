import React,{useEffect, useState} from 'react'
import Products from '../../components/Products/Products'
import Pagination from '../../components/Pagination/Pagination';
import "./styles.css"
import { CircularProgress } from '@material-ui/core';

export default function Home() {
  

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/Atombuddy/e-commerce/products")
    .then(response=>response.json())
    .then(data=>setData(data))
  },[])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  if(data.length===0){
    return(
      <div className='progressCircle'>
        <CircularProgress/>
       </div>
    )
  }
  return (
    <div>
      <Products products={currentPosts}/>
      <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
        className="pagination"
      />
    </div>
  )
}