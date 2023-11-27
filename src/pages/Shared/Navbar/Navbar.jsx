import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import './navbar.css'


const Navbar = () => {

    const { user, logOut, loading } = useContext(AuthContext);
    const [isNavbarOpen, setNavbarOpen] = useState(false);

    const toggleUserDetail = () => {
        setNavbarOpen(!isNavbarOpen);
        console.log('her')
      };

    // logout the user 

    const handleLogOut = () => {
        logOut()
        // .then(res => {
        //     // console.log(res)
        // })
    }

    const navOptions = <>
        <NavLink to="/"><li className="bg-[#4D455D] text-[#DED0B6] md:rounded-s-2xl"><a>Home</a></li></NavLink>
        {
            user ?
                <NavLink to="/surveys"><li className="bg-[#4D455D] text-[#DED0B6]"><a>Survey</a></li></NavLink> :
                <NavLink to="/login"><li className="bg-[#4D455D] text-[#DED0B6]"><a>Login</a></li></NavLink>
        }

        {
            user ?
                <li onClick={handleLogOut} className="bg-[#4D455D] text-[#DED0B6] "><a>Logout</a></li>
                :
                <NavLink to='/register'><li className="bg-[#4D455D] text-[#DED0B6] "><a>Sign up</a></li>
                </NavLink>
        }
        <NavLink to="/pricing"><li className="bg-[#4D455D] text-[#DED0B6] md:rounded-r-2xl"><a>Pricing</a></li></NavLink>

    </>

    return (
        <>
            <div className="navbar rounded-xl ms-4  mt-2 bg-[#7DB9B6] text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img className="btn btn-ghost border-0 text-black text-xl" src="https://i.postimg.cc/pLXrRx1h/icons8-valorant-100-1.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu h-12 menu-horizontal rounded-2xl text-[#F5E9CF]">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ?
                            <>
                                <img onClick={toggleUserDetail} className="w-16 h-16 rounded-full mr-2" src={user?.photoURL} alt="" />
                            </>
                            :
                            <img className="w-16 h-16 rounded-full mr-2 " src="https://i.ibb.co/m98MvWN/icons8-user-90.png" alt="" />
                    }
                    {isNavbarOpen && (
        <div className="top-24 right-0 bg-white border rounded shadow-md p-4">
          <ul className="flex space-x-4">
            
            <Link to='/addsurvey'>
            <li>Add survey
            </li>
            </Link>
            <Link to="/allusers">
            <li>
              Users
            </li>
            </Link>
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                Order History
              </a>
            </li>
          </ul>
        </div>
      )}
                </div>
            </div>
        </>
    );
};

export default Navbar;