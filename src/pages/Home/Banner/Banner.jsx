
const Banner = () => {
    return (
        <>
            <div className="md:flex mx-4 gap-5">
                <div className="hero mt-10 bg-cover rounded-lg max-w-6xl min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/M8gwS23/19948929-6162910.jpg)' }}>
                    <div className="hero-overlay rounded-lg bg-opacity-20"></div>
                    <div className="hero-content text-center text-neutral-content">
                    </div>
                </div>
                <div className="max-w-lg text-justify mt-10 w-full mx-auto p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold">Welcome to Voxly</h3>
                    <p className="text-xl mt-5 font-normal">Shape the future, voice your opinions, and earn seamlessly with our cutting-edge Voxly integrated with secure and rewarding payment options.</p>
                    <div className="flex mt-5 mx-auto flex-col w-[60%] ">
                        <div className="grid h-12 bg-[#4D455D] rounded-box place-items-center">content</div>
                        <div className="divider">OR</div>
                        <div className="grid h-12 bg-[#4D455D] rounded-box place-items-center">content</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;