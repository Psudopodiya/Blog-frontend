import React, { useState, useEffect } from 'react'
import Navbar from 'src/components/Navbar/Navbar'
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
        <div>
            <Navbar className='position:absolute bg-transparent'/>
            <div className=' mt-5 '>
                <div className="flex flex-col items-center">
                    <div className="min-h-96 w-full rounded-lg bg-center bg-cover bg-[url('https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt89a8ee693bf0f55f/65b915058cd683040ab67788/Why_Klopp_leaving.jpg?auto=webp&format=pjpg&width=1200&quality=60')]"></div>
                    <img className="-translate-y-4 p-1 bg-white inline-block h-20 w-20 rounded-full shadow-2xl" src={`http://127.0.0.1:8000${userData.profile_image}`} alt='Profile Pic'/>
                </div>
                <div className=" font-Exo text-2xl text-center">{userData.username}</div>
                <div className=" font-Trirong flex justify-center space-x-7 mt-3">
                    <div>21 yo</div>
                    <div>Texas</div>
                </div>
                <div className="flex justify-center space-x-10 mt-5">
                    <div className="flex flex-col items-center">
                    <div className=" font-Trirong text-2xl">218</div>
                    <div className=" font-Exo">Posts</div>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className=" font-Trirong text-2xl">9</div>
                    <div className=" font-Exo">Followers</div>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className=" font-Trirong text-2xl">21</div>
                    <div className=" font-Exo">Photoes</div>
                    </div>
                </div>
                <div className="flex justify-center space-x-8 mt-5">
                    <button className="bg-white hover:bg-slate-200 rounded-2xl border-2 border-black p-1">Activity</button>
                    <button className="bg-white hover:bg-slate-200 rounded-2xl border-2 border-black p-1">About Me</button>
                    <button className="bg-white hover:bg-slate-200 rounded-2xl border-2 border-black p-1">Achievements</button>
                    <button className="bg-white hover:bg-slate-200 rounded-2xl border-2 border-black p-1">Contact me</button>
                </div>
            </div>
        </div>

    )
}

export default Profile