import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    // logout the user 

    const handleLogOut = () => {
        logOut()
            // .then(res => {
            //     // console.log(res)
            // })
    }

    const navOptions = <>
        <Link to="/"><li className="bg-[#4D455D] rounded-s-2xl"><a>Home</a></li></Link>
        {
            user ?
                <Link to="/survey"><li className="bg-[#4D455D]"><a>Survey</a></li></Link> :
                <Link to="/login"><li className="bg-[#4D455D]"><a>Login</a></li></Link>
        }

        {
            user ?
                <li onClick={handleLogOut} className="bg-[#4D455D] "><a>Logout</a></li>
                :
                <Link to='/register'><li className="bg-[#4D455D] "><a>Sign up</a></li></Link>
        }
        <Link to="/pricing"><li className="bg-[#4D455D] rounded-r-2xl"><a>Pricing</a></li></Link>

    </>

    return (
        <>
            <div className="navbar rounded-xl mt-2 bg-[#7DB9B6] text-black">
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
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;