/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import logo from "../../assets/White Logo_Hotchpotch-01 1.png"
const Navbar = () => {

    const navlinks =<>
                                                  
<li><NavLink className= " text-xl text-[#00FFA7]" to="/company">Demos</NavLink></li>
<li><NavLink  className= " text-xl text-white hover:text-[#00FFA7]" to="/servies">About</NavLink></li>
<li><NavLink  className= " text-xl text-white  hover:text-[#00FFA7]" to="/businessModel">Blog</NavLink></li>
<li><NavLink  className= " text-xl text-white  hover:text-[#00FFA7]" to="/blogs">Pages</NavLink></li>
<li><NavLink  className= " text-xl text-white  hover:text-[#00FFA7]" to="/contactsUs">Contact</NavLink></li>

</>

    return (
        <div className="navbar flex items-center  md:justify-evenly p-8 h-24 w-full bg-[#12141D]">
        <div className="flex justify-between items-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <RiMenu3Line className="text-white text-2xl" />
                        </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-black lg:text-white w-52">
             {
                navlinks
             }
 <button className=" mt-4 btn border btn-outline">login</button>
        <button className="mt-2 text-white btn bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] border-none lg:ml-4">Get Started Free</button>

            </ul>
          </div>


<img src={logo} alt="" />
<div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black lg:text-white">
            {
                navlinks
            }
          </ul>
          
        </div>
       
<div className=" hidden lg:flex lg:ml-32">
  <button className="text-white btn border btn-outline">login</button>
        <button className="text-white btn bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] border-none lg:ml-4">Get Started Free</button>
</div>
        </div>
      </div>
    );
};

export default Navbar;