
const Login = () => {
    return (
        <>
            <div
                className="min-h-screen mt-10 rounded-xl flex items-center justify-center"
                style={{ backgroundImage: 'url("https://i.ibb.co/RPSNYMy/22541.jpg")', backgroundSize: 'cover' }}
            >
                <div className="bg-black p-8 rounded shadow-md w-96 backdrop-blur-sm bg-opacity-30">
                    <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#4D455D]"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#4D455D]"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#E96479] text-white py-2 px-4 rounded-md hover:bg-[#DC8686] focus:outline-none focus:bg-[#DC8686]"
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>

        </>
    );
};

export default Login;