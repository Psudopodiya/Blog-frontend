import React, { useEffect, useState } from "react";
import Navbar from "src/components/Navbar/Navbar";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // for snow theme
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const BlogAdd = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('access_token')
  const user = JSON.parse(localStorage.getItem('user'))
  const [imageUrl, setImageUrl] = useState(null)
  const [image, setImage] = useState(null)

  const [formData, setFormData] = useState({
    author: user.username,
    title: "",
    content: "",
    category: "",
  });

  const clearForm = () => {
    setFormData({
      title: '',
      category: 'Technology', // Default category or the first one
      content: '',
    });
    setImageUrl(null);
    setImage(null);
  };

  const handleContentChange=(data)=>{
    setFormData({...formData, content: data})
  }

  const handleFormChange=(e)=>{
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const[errorMessage, setErrorMessage] = useState(null)
  const showError=(message)=>{
    setErrorMessage(message)
    setTimeout(()=>{
        setErrorMessage(null)
    },3000)
}

  const handleSubmit= async (e) =>{
    e.preventDefault()
    console.log(formData)
    const data = new FormData();
    data.append('author', formData.author);
    data.append('title', formData.title);
    data.append('content', formData.content);
    data.append('category', formData.category);
    if (image) {
      data.append('cover_image', image);
    }
    try {
      await axios.post('http://127.0.0.1:8000/create_blog', data,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );
        //Comments
        navigate('/')
    } catch (error) {
        showError(error.message)
        console.error('Something Failed:', error.message);
    }

  }

  useEffect(() => {
    // can add the part to fetch categories from the backend

  }, []);

  
  return (
    <>
      <Navbar/>
      <form onSubmit={handleSubmit}>
        <div className="mx-10 my-10">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Hi {user.username}
            </h2>
            {/* <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p> */}
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="title"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="janesmith"
                      onChange={(e)=> handleFormChange(e)}
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    name="category"
                    autoComplete="category-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={(e)=> handleFormChange(e)}
                  >
                    <option>Technology</option>
                    <option>Science</option>
                    <option>Travel</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="content"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Content
                </label>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write your blog content here.
                </p>
                <div className="mt-2">

                <ReactQuill theme="snow" value={formData.content} onChange={handleContentChange}/>
            
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Cover Image
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {imageUrl ? ( <img src={formData.imageUrl} alt="Uploaded Cover" className="mt-4 mb-2 mx-auto h-32 w-auto"/>) 
                      : (<div>
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                            <span>Upload a file</span>
                            <input id="file-upload" name="image" type="file" className="sr-only" onChange={handleImageChange}/>
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>)}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={clearForm}
          >
            Clear
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
        {errorMessage && (<div style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px', margin: '10px' }}>{errorMessage}</div>)}
      </form>
    </>
  );
};
export default BlogAdd;
