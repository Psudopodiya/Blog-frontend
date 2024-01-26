import React from 'react'

const UserAvatar = () => {
  const isLogin = localStorage.getItem('access_token')? true : false
  const user = localStorage.getItem('user')
  // console.log("AVATAR COMPONENT :",user)
  // console.log("AVATAR COMPONENT :",isLogin)
  const generateRandomColor=()=>{
      const letters = '0123456789ABCDEF'
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

  if (isLogin) {
    return (
      <div className="flex -space-x-1 overflow-hidden">
        {console.log('navbar is login :', user)}
        {user.profile_image ? (
          <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={user.profile_image} alt={user.username} />
        ) : (
          <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white" style={{ backgroundColor: generateRandomColor() }}>
            <span className="text-white font-bold">{user.username[0].toUpperCase()}</span>
          </div>
        )}
      </div>
    );
  }else {
    console.log('navbar is logedout :', user)
    return (
      <a href='/login' className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Login</a>
    );
  }
}

export default UserAvatar