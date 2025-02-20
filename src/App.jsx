import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar';
import { Toaster } from "react-hot-toast";

const App = () => {
  return(
    <div>
      <div className="bg-slate-900">
        <Navbar/>
        <Toaster />
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
};

export default App;
