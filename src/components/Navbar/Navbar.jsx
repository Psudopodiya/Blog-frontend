import React, { useState} from 'react'
import Avatar from '../Icons/Avatar';
// import { AppContext } from 'src/App';


const Navbar = ({handleLogout}) => {
  
  const isLogin = localStorage.getItem('access_token')? true : false
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`

  return (
    <div className='flex flex-col justify-between items-center md:flex-row mt-5 mx-10'>
      <div className='flex ml-3 items-center justify-between flex-row'>
        <a href='/' className='text-xl font-semibold text-gray-900 uppercase hover:rounded-lg hover:bg-slate-500 max-w-prose'>
          App LOGO
        </a>
        {/* The Hanmburger Icon */}
        <button className="flex flex-col h-12 w-12 border-2 border-black justify-center items-center group md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={() => setIsOpen(!isOpen)}>
          <div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100": "opacity-50 group-hover:opacity-100"}`}/>
          <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`}/>
          <div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100": "opacity-50 group-hover:opacity-100"}`}/>
        </button>
      </div>

      {/* Default navbar routes */}
      <nav className={`flex-col ${isOpen ? 'flex' : 'hidden'} font-Exo md:flex md:flex-row md:justify-end`}>
          <a href='/' className="px-4 py-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:bg-gray-200">Blogs</a>
          <a href='/' className="px-4 py-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:bg-gray-200">Contacts</a>
          <a href='/' className="px-4 py-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:bg-gray-200">About</a>
          <a href='/' className="px-4 py-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:bg-gray-200">Authors</a>

          {/* The Dropdown list i.e MORE */}
          <div>
            <button onClick={()=> setDropdownOpen(!dropdownOpen)}>
              <Avatar/>
            </button>

            {/* The list of the Dropdown */}
            {dropdownOpen && isLogin && (
              <div className={`absolute right-12 mt-2 origin-top-right rounded-md shadow-lg ${dropdownOpen ? 'transition ease-out duration-100 transform opacity-100 scale-100' : 'transition ease-in duration-75 transform opacity-0 scale-95'}`}>
                <div className="flex flex-col px-2 py-2 bg-white rounded-md shadow">
                  <a href='/profile' className="px-4 py-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:bg-gray-200">My Profile</a>
                  <a href='/addBlog' className="px-4 py-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:bg-gray-200">Add A Blog ?</a>
                  <a onClick={()=> handleLogout()} href='/' className="px-4 py-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:bg-gray-200">Logout, why?</a>
                </div>
              </div>
            )}
          </div>
        </nav>
    </div>
  )
}
export default Navbar