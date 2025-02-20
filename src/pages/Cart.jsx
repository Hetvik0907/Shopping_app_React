import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from '../components/CartItem'
import { useEffect, useState } from "react";





const Cart = () => {
  const { cart } = useSelector((state) => state)
  const [TotalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr) => acc + curr.price, 0));
  },[cart])
  return (
    <div >
      {
        cart.length > 0 ?
          (<div className="flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap" >
            <div className="lg:w-[70%]">
            {
              cart.map((item,index)=>{
                return <CartItem key={item.id} item={item} itemIndex={index} />
              })
            }
            </div>


            <div className="md:w-[30%] w-full flex flex-col gap-8 justify-between">
              <div className="mt-20">
              <p className="text-xl text-[#166534] uppercase font-[600]">Your Cart</p>
              <p className="text-5xl font-[600] text-[#15803d] uppercase mb-4">Summary</p>
              <p className="font-[600] text-xl text-slate-700">
            Total Items: <span className="font-normal">{cart.length}</span>
          </p>
                   
              </div>

              <div className="mb-20">
             <p className="text-slate-700 text-xl font-[600] mb-5 ">
             Total Amount:
             <span className="font-bold ml-2 text-black">${TotalAmount}</span>
              </p> 
              <button className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-[#15803d]
          border-2 border-[#15803d] hover:bg-white hover:text-[#15803d] transition-all duration-300 ease-in">
                CheckOut Now
              </button>
              </div>
            </div>

          </div>) :
          (<div className="flex flex-col justify-center items-center space-y-5 min-h-[80vh]">
            <h1 className=" text-[20px] text-[#3f4246] font-bold my-1 " >Your Cart is Empty!</h1>
            <NavLink to="/">
              <button className="text-white  text-[18px] bg-green-600 px-10 py-3 rounded-lg
              hover:bg-white hover:text-green-600 border-2 border-green-600 transition duration-300 ease-in">
                SHOP NOW
              </button>
            </NavLink>
          </div>)
      }

    </div>
  );
};

export default Cart;
