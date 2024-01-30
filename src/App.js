import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Test from './pages/test';
import BlogAdd from 'src/pages/blogAdd';
import Profile from 'src/pages/Home/profile';

function App() {
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user')
  };

  return (
      <Router>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register onLogout={handleLogout}/>} />
            <Route path='/test' element={<Test/>}></Route>
            
            <Route path='/' element={<Home handleLogout={handleLogout}/>}/>
            <Route path='/addBlog' element={ localStorage.getItem('access_token') ? <BlogAdd/> : <Navigate to="/login" replace/>}></Route>
            <Route path='/profile' element={ localStorage.getItem('access_token') ? <Profile/> : <Navigate to='/login' replace/>}></Route>
          </Routes>
        </div>
      </Router>
  );
}
export default App;
