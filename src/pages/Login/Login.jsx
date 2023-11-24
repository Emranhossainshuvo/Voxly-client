import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const {googleSignIn} = useContext(AuthContext); 

    const handleGoogleLogin = () => {
        googleSignIn()
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <>
            <div
                className="min-h-screen mt-10 mb-10 rounded-lg flex items-center justify-center"
                style={{ backgroundImage: 'url("https://i.ibb.co/RPSNYMy/22541.jpg")', backgroundSize: 'cover' }}
            >
                <div className="bg-black p-8 rounded shadow-md w-96 backdrop-blur-sm bg-opacity-20">
                    <h2 className="text-3xl text-[#F5E9CF] font-bold mb-6 text-center">Login</h2>
                    <form>
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
                            className="w-full bg-[#E96479] text-[#F5E9CF] py-2 px-4 rounded-md hover:bg-[#DC8686] focus:outline-none focus:bg-[#DC8686]"
                        >
                            Log In
                        </button>
                        <button
                        onClick={handleGoogleLogin}
                            className="w-full bg-[#E96479] text-[#F5E9CF] py-2 px-4 rounded-md hover:bg-[#DC8686] focus:outline-none focus:bg-[#DC8686]"
                        >
                            Google
                        </button>
                    </form>
                </div>
            </div>

        </>
    );
};

export default Login;