
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
    <div>
      <Header></Header>
      <div className='container'>
        
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='*' element={<Notfound></Notfound>}></Route>
        </Routes>
      </div>
      <footer>
        <p className='text-center bg-dark text-white p-4 mb-0'>Copyright © 2022 MS Furniture. All right reserved.</p>
      </footer>
    </div>
    
  );
}


export default App;
