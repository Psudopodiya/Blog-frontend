import React from 'react'

const Avatar = () => {

    const isLoggedin = localStorage.getItem('access_token')? true:false
    const user = JSON.parse(localStorage.getItem('user'))
    if(!isLoggedin){
        return(
            <a href='/login' className="px-4 py-2 text-sm font-semibold text-gray-900 rounded-lg md:mt-0 hover:bg-gray-200">
                Login
            </a>
        )
    }
    return(
        <div className="flex px-4 overflow-hidden">
            {/* Conditional rendering based on whether user has a profile image */}
            {user.profile_image !== null ? (
                <>
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={`http://127.0.0.1:8000${user.profile_image}`} alt={`profile_image`} />
                    <button>
                        <svg fill='currentColor' viewBox='0 0 20 20' className= 'hover:animate-bounce inline w-4 h-4 self-center transition-transform duration-200 transform md:-mt-1'>
                            <path fillRule='evenodd' d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </>
            ) : (
                <>
                    <span className="inline-block h-10 w-10 rounded-full ring-2 ring-white"> {user.username[0].toUpperCase()}</span>
                    <button>
                        <svg fill='currentColor' viewBox='0 0 20 20' className= 'hover:animate-bounce inline w-4 h-4 self-center transition-transform duration-200 transform md:-mt-1'>
                            <path fillRule='evenodd' d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </>
            )}
        </div>
    )
}

export default Avatar
