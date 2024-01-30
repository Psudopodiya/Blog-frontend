import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Login = () =>  {

    const navigate = useNavigate()

    const[currUser, setCurrUser] = useState({
        us:'',
        pass:''
    })

    const[errorMessage, setErrorMessage] = useState(null)
    
    const showError=(message)=>{
        setErrorMessage(message)
        setTimeout(()=>{
            setErrorMessage(null)
        },3000)
    }
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://127.0.0.1:8000/login', {
                username: currUser.us,
                password: currUser.pass,
            });
            const access_token = response.data.access_token
            const refresh_token = response.data.refresh_token
            localStorage.setItem('refresh_token', refresh_token)
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('user', JSON.stringify(response.data.user))
            console.log("RESPONSE DATA",response.data)
            console.log("USER OBJECT",localStorage.getItem('user'))
            navigate('/')
        } catch (error) {
            showError(error.message)
            console.error('Login Failed:', error.message);
        }
    };



    return (
        <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div className="relative py-3 sm:w-96 mx-auto text-center">
                <span className="text-2xl font-light ">Login to your account</span>
                <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                    <div className="h-2 bg-purple-400 rounded-t-md"></div>
                    <div className="px-8 py-6 ">
                    <label className="block font-semibold"> Username </label>
                    <input type="text" placeholder="Email" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                        onChange={(e)=>{setCurrUser({...currUser, us: e.target.value})}}/>
                    <label className="block mt-3 font-semibold"> Password </label>
                    <input type="password" placeholder="Password" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                        onChange={(e)=>{setCurrUser({...currUser ,pass: e.target.value})}}/>
                    <div className="flex justify-between items-baseline">
                        <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600" onClick={handleLogin}>Login</button>
                    </div>
                    {errorMessage && (
                        <div style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px', margin: '10px' }}>
                            {errorMessage}
                        </div>
                    )}
                    <div>
                        new User ? Click here 
                        <button onClick={()=>{navigate('/register')}} className="mt-4 py-2 px-6 rounded-md ">Register</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  );
};
export default Login;