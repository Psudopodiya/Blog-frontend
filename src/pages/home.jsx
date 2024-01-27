import React, { useEffect, useState } from 'react'
import Navbar from 'src/components/Navbar/Navbar'
import Footer from 'src/components/Footer/Footer'
import axios from 'axios'
import './home.css'



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
      <div className=''>
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
            <div key={blog.id} className="relative flex w-96 flex-col rounded-xl bg-white border-green-950 bg-clip-border text-gray-700 shadow-md max-w-[250px] ">
              <div className='p-6'>
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {blog.title}
                </h5>
                {/* calendar and likes */}
                <div className="flex gap-7 text-xs pb-2">
                  <div className="flex items-center bg-slate-400 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-4 h-">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    <p className="">11/03/2002</p>
                  </div>
                  <div className="flex items-center bg-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-4 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    3
                  </div>
                </div>

                <div className="custom-shape-container relative">
                  <div className="custom-shape"></div>
                  <button className="absolute top-0 left-0 blog-card-button">Button</button>
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
