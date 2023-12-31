import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { VscGithubInverted } from "react-icons/vsc";

const Login = () => {

    const { googleSignIn, signIn, githubLogin } = useContext(AuthContext);

    // const location = useLocation();

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Social login added with Google",
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(res => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Social login added with Github",
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
            .catch(error => {
                console.log(error)
            })
    }

    // login user with email and password

    const handleLoginUser = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const user = { name, photo, email, password };
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>

        <Helmet>
            <title>
                Voxly | login
            </title>
        </Helmet>
            <div
                className="min-h-[85vh] mx-4 mt-10 mb-10 rounded-lg flex items-center justify-center"
                style={{ backgroundImage: 'url("https://i.ibb.co/RPSNYMy/22541.jpg")', backgroundSize: 'cover' }}
            >
                <div className="bg-black p-8 rounded shadow-md w-96 backdrop-blur-sm bg-opacity-20">
                    <h2 className="text-3xl text-[#F5E9CF] font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={handleLoginUser}>
                        <div className="mb-4">
                            <label className="block text-[#F5E9CF]  text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none text-[#F5E9CF] focus:border-[#4D455D]"
                                placeholder="Enter your Email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-[#F5E9CF] text-sm font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full text-[#F5E9CF] px-3 py-2 border rounded-md focus:outline-none focus:border-[#4D455D]"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#E96479] text-[#F5E9CF] py-2 px-4 rounded-md hover:bg-[#DC8686] focus:outline-none focus:bg-[#DC8686]"
                        >
                            Log In
                        </button>

                        <div className="flex mt-5 justify-between text-white">
                            <p>New user? <Link className="text-green-500 underline" to='/register'>Register</Link></p>
                        <div className="flex">
                        <button
                            onClick={handleGoogleLogin}
                            className=" text-[#F5E9CF] py-2 px-4 rounded-md  focus:outline-none focus:bg-[#DC8686]"
                        >
                            <FcGoogle></FcGoogle>
                        </button>
                        <button
                            onClick={handleGithubLogin}
                            className="w-full text-[#F5E9CF] py-2 px-4 rounded-md focus:outline-none"
                        >
                            <VscGithubInverted />
                        </button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
};

export default Login;