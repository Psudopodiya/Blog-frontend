import React, { useEffect, useState } from 'react'
import Navbar from 'src/components/Navbar/Navbar'
import Footer from 'src/components/Footer/Footer'
import axios from 'axios'



const Home = ({handleLogout}) => {
  console.log('Home component is rendering');


  const[blogs, setBlogs] = useState([])
  
  const fetchData = async() =>{
    try{
      const response = await axios.get('http://127.0.0.1:8000') 
      console.log("API Response: ", response)
      setBlogs(response.data)
    }catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  useEffect(()=>{
    fetchData()
    console.log('When loading')
  },[])

  return (
    <>
      <Navbar className='position:absolute bg-transparent' handleLogout={handleLogout} />
      <div className='flex flex-col items-center justify-center min-h-180px bg-transparent p-8 sm:p-12 lg:p-16'>
        <h1 className='text-5xl font-bold text-green-600 mb-4'>Hey, Hello There</h1>
        <p className='text-2xl text-brown-600'>See our thoughts and ideas below</p>
      </div> 
      
      <div className="container mx-auto p-4 mt-10 bg-transparent">
        {blogs && blogs.length > 0 && (
          <>
            <div className="bg-no-repeat bg-center bg-clip-border text-center text-gray-700 overflow-hidden rounded-xl gap-4 h-[25rem] md:h-[40rem] bg-black backdrop-blur
                bg-[url('https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D')]">
            <div className="absolute bottom-0 left-0 right-0 p-6 px-6 pb-14 md:px-12 flex flex-col justify-between h-full">
                <div className="mb-6">
                  <h2 className="block font-sans text-xl md:text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                    How we design and code open-source projects? asndjkas cja fjs dkjf akj cjkd fkakl ckjsa vkjas cjk f
                  </h2>
                  <div className="my-4">
                    {/* Additional text to display */}
                    <p className="text-gray-400 text-sm">Additional text goes here</p>
                  </div>
                </div>
                <div className="flex items-end justify-end">
                  <div className="flex flex-col items-end">
                    {/* Name */}
                    <h5 className="block mb-4 font-sans text-sm md:text-2xl antialiased font-semibold leading-snug tracking-normal text-gray-400">Tania Andrew</h5>
                  </div>
                  {/* Profile Image */}
                  <img
                    alt="Tania Andrew"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                    className="relative inline-block h-[34px] w-[34px] md:h-[76px] md:w-[76px] !rounded-full border-2 border-white object-cover object-center self-end"
                  />
                </div>
              </div>
            </div>
          </>
        )}


        {/* Blog List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mb-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="relative bg-no-repeat bg-center bg-clip-border text-center text-gray-700 overflow-hidden rounded-xl h-[20rem]">
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
              {/* Blog image */}
              <div>
                <img
                  src={blog.feature_image}  // Replace 'blog.image' with the actual image source from your blog data
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute p-6 px-6 py-14 md:px-12 flex flex-col justify-between h-full">
                <div className="mb-6">
                  <h2 className="block font-sans text-xl md:text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                    {blog.title}
                  </h2>
                  <div className="my-4">
                    {/* Additional text to display */}
                    <p className="text-gray-400 text-sm">{blog.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer/>
      </div>
    </>
    
  )
}

export default Home
