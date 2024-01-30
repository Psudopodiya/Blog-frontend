import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Profile = () => {

    const token = localStorage.getItem('access_token')
    const user = JSON.parse( localStorage.getItem('user'))

    const[userData, setUserData] = useState({
        username:'',
        email:'',
        birthdate:'',
        profile_image:'',
    })
    const[errorMessage, setErrorMessage] = useState(null)

    const showError=(message)=>{
        setErrorMessage(message)
        setTimeout(()=>{
            setErrorMessage(null)
        },3000)
    }

    const fetchProfile= async()=>{
        try{
            const response = await axios.get('http://127.0.0.1:8000/profile', 
            {
                username : user.username,
                headers:{
                    'Authorization': `Bearer ${token}`,
                },
            });
            const { username, email, birthdate, profile_image } = response.data;
            // console.log(response.data)
            console.log(username, email, birthdate, profile_image)
            setUserData({ username, email, birthdate, profile_image });
            console.log("PROFILE PAGE USER DATA",userData)
        }catch(error) {
            showError(error.message)
            console.error('Something Failed:', error.message);
        }
    }

    
    useEffect(()=>{
        fetchProfile();
    },[token])



    return (
        <div className='p-6 max-w-sm mx-auto rounded-lg shadow-lg relative mt-[20px]'>
            <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 mt-5'>
                <div className='h-20 w-20 bg-gray-300 rounded-full overflow-hidden'>
                    <img src={`http://127.0.0.1:8000${userData.profile_image}`} alt='Profile' className='object-cover w-full h-full'/>
                </div>
            </div>
            <form className='flex flex-col align-middle pt-12'>
                <label htmlFor='firstName' className='text-sm font-semibold'>Username</label>
                <input type='text' name='firstName' className='border border-gray-300 p-2 rounded mt-1' value={userData.username} />
                <label htmlFor='jobTitle' className='text-sm font-semibold mt-4'>Email</label>
                <input type='text' name='jobTitle' className='border border-gray-300 p-2 rounded mt-1'  value={userData.email}/>
                <label htmlFor='birthday' className='text-sm font-semibold mt-4'>Birthday</label>
                <input type='text' name='birthday' className='border border-gray-300 p-2 rounded mt-1' value={userData.birthdate} />
                <label htmlFor='bio' className='text-sm font-semibold mt-4'>Bio</label>
                <textarea name='bio' className='border border-gray-300 p-2 rounded mt-1' />
                <button className='border border-gray-300 p-2 rounded mt-4 bg-blue-600 text-white' type='submit'>Save</button>
            </form>
        </div>
    )
}

export default Profile