import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

    const { googleSignIn, createUser } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                console.log(res);
                // const user = res.data; 
            })
            .catch(error => {
                console.log(error)
            })
    }

    // register user with email and password
    const handleCreateUser = e => {
        e.preventDefault(); 
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // const user = { name, photo, email, password };
        createUser(email, password)
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
            <div
                className="min-h-screen my-10 rounded-lg text-[#F5E9CF] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: 'url("https://i.ibb.co/VYcwFJy/8843-1.jpg")' }}
            >
                <div className="bg-black p-8 rounded shadow-md w-96 backdrop-filter backdrop-blur-lg bg-opacity-10">
                    <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-[#F5E9CF] text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-[#F5E9CF] text-sm font-medium mb-2">
                                Photo
                            </label>
                            <input
                                type="text"
                                name="photo"
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-[#F5E9CF] text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-[#F5E9CF] text-sm font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#4D455D] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                        >
                            Sign Up
                        </button>
                        <button onClick={handleGoogleLogin}
                            className="bg-[#4D455D] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                        >
                            Google
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;