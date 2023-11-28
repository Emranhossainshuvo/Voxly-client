import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#E96479] to-[#F5E9CF]">
                <div className="text-center text-white">
                    <h1 className="text-9xl font-bold mb-4 animate-bounce">🤪 Oops!</h1>
                    <p className="text-4xl mb-8 animate__animated animate__rubberBand animate__delay-1s">
                        Something went wrong.
                    </p>
                    <Link>
                        <button className="bg-white text-purple-500 px-6 py-3 rounded-full font-bold hover:bg-purple-500 hover:text-white transition duration-300 transform hover:scale-110">
                            Go back home
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;