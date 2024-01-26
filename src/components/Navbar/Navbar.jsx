import React, { useState} from 'react'
// import { AppContext } from 'src/App';


const Navbar = ({handleLogout}) => {
  // const{user} = useContext(AppContext)
  // const user = localStorage.getItem('user')
  const isLogin = localStorage.getItem('access_token')? true : false
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`

  

  const avatar = isLogin ?( 
                  <div className="flex -space-x-1 overflow-hidden">
                    A
                    {/* {user.profile_image ?( 
                      <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={user.profile_image} alt={user.username}/>
                      ):(<img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src='' alt={user.username}>{user.username[0]} </img>
                    )} */}
                  </div>):( 
                  <a href='/login' className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Login</a> )


  return (
    <div className='flex flex-col justify-between items-center md:flex-row w-full text-gray-700 bg-transparent dark-mode:text-gray-200 dark-mode:bg-gray-800'>
      <div className='flex max-w-screen-xl px-4 mx-auto items-center justify-between flex-row md:px-6 lg:px-8'>
        <a href='/' className='text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline'>
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
      <nav className={`flex-col flex-grow pb-4 md:pb-0 ${isOpen ? 'flex' : 'hidden'} md:flex md:justify-end md:flex-row`}>
          <a href='/' className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Blogs</a>
          <a href='/' className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Contacts</a>
          <a href='/' className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">About</a>
          <a href='/' className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Authors</a>

          {/* The Dropdown list i.e MORE */}
          <div onClick={()=> setDropdownOpen(!dropdownOpen)} className='relative' x-data="{open:flase}">
            <button onClick={()=> setDropdownOpen(!dropdownOpen)} className='flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>
              {/* <span>Dropdown</span> */}
              {avatar}
              {/* The Arrow and it's Animation */}
              {isLogin && (
                <svg fill='currentColor' viewBox='0 0 20 20' className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
                  <path fillRule='evenodd' d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              )}
            </button>

            {/* The list of the Dropdown */}
            {dropdownOpen && isLogin && (
              <div className={`absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 ${dropdownOpen ? 'transition ease-out duration-100 transform opacity-100 scale-100' : 'transition ease-in duration-75 transform opacity-0 scale-95'}`}>
                <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                  <a href='/' className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">My Profile</a>
                  <a href='/addBlog' className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Add A Blog ?</a>
                  <a onClick={()=> handleLogout()} href='/' className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Logout, why?</a>
                </div>
              </div>
            )}
          </div>
        </nav>
    </div>
  )
}
export default Navbar