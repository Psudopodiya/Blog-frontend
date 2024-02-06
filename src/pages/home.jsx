import React, { useEffect, useState } from 'react'
import Navbar from 'src/components/Navbar/Navbar'
import Footer from 'src/components/Footer/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Home = ({handleLogout}) => {
  let navigate = useNavigate()
  const[blogs, setBlogs] = useState([])

  const fetchData = async() =>{
    try{
      const response = await axios.get('http://127.0.0.1:8000') 
      // console.log("API Response: ", response)
      setBlogs(response.data)
    }catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  const handleReadMoreClick = (pk)=>{
    navigate(`/blog/${pk}`)
  }



  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
      <Navbar className='position:absolute bg-transparent' handleLogout={handleLogout} />

      <div className='mx-12 mt-8'>
        <h1 className='text-5xl font-bold text-blue-200 font-Sanchez '>Hey, Hello There</h1>
        <p className='text-2xl text-brown-600 font-Exo'>See our thoughts and ideas below</p>
      </div> 

      {/* Main Header */}
      <div className="flex mx-12 mt-10 border border-black rounded-xl">
        <div className="min-h-96 min-w-96 bg-cover bg-center rounded-xl bg-[url('https://cdn.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/01/29003602/GettyImages-1961125053-1-1024x683.jpg')]">
        </div>
        <div className="flex flex-col">
          <div className="ml-2 text-4xl font-Sanchez">As regular season slog gives way to Super Bowl run, Patrick Mahomes remains inevitable</div>
          <div className="flex justify-items-start mt-3 ml-2">
            <button className="flex items-center text-sm rounded-md hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>
              <p>11/03/2002</p>
            </button>
            <button className="text-sm rounded-md hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2 h-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              <p></p>
            </button>
          </div>
          <div className="mt-3 ml-2 font-Exo text-xl">BALTIMORE — While they stood and sang, he sat in silence. While the music thumped and the cigar smoke filled the air and his teammates danced amid the delirium of a fourth trip to the Super Bowl in five years, Patrick Mahomes ... 
          </div>
          <div className="flex justify-end mr-3 mt-2 space-x-0.5 items-center">
            <div>Dean Edwards</div>
            <div>
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1706606999710-72658165a73d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D" alt=''/>
              </div>
          </div>
        </div>
      </div>

      <div className="flex mt-11 space-x-6 items-center justify-center">
        <button className="hover:bg-slate-300 px-1 rounded-lg text-xl border-2 border-black">All</button>
        <button className="hover:bg-slate-300 px-1 rounded-lg text-xl border-2 border-black">Design</button>
        <button className="hover:bg-slate-300 px-1 rounded-lg text-xl border-2 border-black">Tech</button>
        <button className="hover:bg-slate-300 px-1 rounded-lg text-xl border-2 border-black">Sports</button>
      </div>


      <div className="container mx-auto p-4 mt-10 bg-transparent">
        {/* Blog List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mb-8">
          {blogs.map((blog) => (
            <div key={blog.pk} className="flex flex-col p-2 border-2 border-black shadow-xl rounded-lg  transform transition duration-500 hover:scale-110 hover:bg-slate-300">
                <div className="text-2xl font-Exo">{blog.title}</div>
                {/* calendar and likes */}
                <div className="flex justify-items-start mt-3 space-x-3 ">
                  <div className="flex items-center text-sm rounded-md bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    <p>11/03/2002</p>
                  </div>
                  <button className="flex items-center text-sm rounded-md bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <p>{blog.upvote_count} Likes</p>
                  </button>
                </div>
                {/* Little Discriptions */}
                <div className=" mt-2 font-Trirong">{blog.content}</div>
                {/* Cover Image */}
                <div className ='min-h-56 max-h-64 mt-2 rounded-lg bg-center bg-cover hover:bg-gray-200' style={{backgroundImage: `url('http://127.0.0.1:8000/${blog.cover_image}')`}}>
                  <div className="relative -left-1 top-0 inline-block min-h-12 min-w-28 overflow-hidden rounded-lg bg-white p-2">
                    <button className="min-h-12 min-w-28 rounded-lg border border-black " onClick={()=> handleReadMoreClick(blog.pk)}>Read More!</button>
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
