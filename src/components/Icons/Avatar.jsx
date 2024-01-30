import React from 'react'

const Avatar = () => {

    const isLoggedin = localStorage.getItem('access_token')? true:false
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    if(!isLoggedin){
        return(
            <a href='/login' className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                Login
            </a>
        )
    }
    return(
        <div className="flex -space-x-1 overflow-hidden">
            {/* Conditional rendering based on whether user has a profile image */}
            {user.profile_image !== null ? (
                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={`http://127.0.0.1:8000${user.profile_image}`} alt={`profile_image`} />
            ) : (
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white text-center leading-6"> {user.username[0].toUppercase} </span>
            )}
        </div>
    )
}

export default Avatar