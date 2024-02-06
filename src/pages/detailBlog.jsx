import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import axios from 'axios';
import Navbar from 'src/components/Navbar/Navbar';

const DetailBlog = () => {

  let { pk } = useParams();
  const [blog, setBlog] = useState({})
  console.log(blog)


  const fetchData = async() =>{
    try{
      const response = await axios.get(`http://127.0.0.1:8000/blog/${pk}`) 
      // console.log("API Response: ", response)
      setBlog(response.data)
    }catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  const createMarkup = () => {
    // const res = DOMPurify.sanitize(htmlContent)
    // console.log(res)
    return { __html: 'First &middot; Second' };
  };

  useEffect(()=>{
    fetchData()
  },[pk])

  return (
    <>
      <Navbar/>
      <div className="flex flex-col mx-5 mt-20 font-Exo">
        <div className="flex gap-3">
          <div>29,June 2020</div>
          <div>by,David Fisher</div>
        </div>
        <div className="mt-3 font-Sanchez text-4xl">
          {blog.title}
        </div>
        <div className="mt-2">
          Small blog related formulations
        </div>
        <div className="min-h-96 w-full mt-5 rounded-sm bg-center bg-cover" style={{backgroundImage: `url('http://127.0.0.1:8000/${blog.cover_image}')`}}>
        </div>
        {/* <img className="-translate-y-5 ml-auto p-1 bg-white inline-block h-20 w-16 rounded-full shadow-2xl" src="https://images.unsplash.com/photo-1706606999710-72658165a73d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D" alt='Cover'/> */}
        <div className="flex gap-1 mt-5 text-sm">
          <button className="bg-white hover:bg-slate-200 rounded-2xl border-2 border-black px-1">Tags</button>
          <button className="bg-white hover:bg-slate-200 rounded-2xl border-2 border-black px-1">Tags</button>
          <button className="bg-white hover:bg-slate-200 rounded-2xl border-2 border-black px-1">Tags</button>
          <button className="bg-white hover:bg-slate-200 rounded-2xl border-2 border-black px-1">Tags</button>
        </div>
        
        <div className=' prose mt-4' dangerouslySetInnerHTML={{__html: blog.content}} >
          
        </div>
      </div>
    </>
  )
}

export default DetailBlog