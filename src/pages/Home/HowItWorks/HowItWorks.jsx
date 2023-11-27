import { Link } from 'react-router-dom';


const HowItWorks = () => {
    return (
        <>
            <div className="my-10 mx-4">
                <section className="max-w-6xl mx-auto px-10 py-10 font-bold text-black bg-gradient-to-r from-teal-500 to-red-500 rounded-2xl">
                    <h2>How It Works 🛠</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <div className="flex mb-30">
                            <span className="text-2xl mr-5">1.</span>
                            <div className='text-[#F5E9CF]'>
                                <h3 className='text-black'>Create Your Survey or Poll</h3>
                                <p className='mb-4'>Start by creating your survey or poll. Add up to six questions with multiple-choice answers, open-ended responses, or a combination of both.</p>
                            </div>
                        </div>

                        <div className="flex mb-30">
                            <span  className="text-2xl mr-5">2.</span>
                            <div className='text-[#F5E9CF]'>
                                <h3 className='text-black'>Design and Personalize</h3>
                                <p className='mb-4'>Make your survey visually appealing. Customize the appearance with themes, colors, and branding to create a unique and engaging experience for your audience.</p>
                            </div>
                        </div>

                        <div className="flex mb-30">
                            <span  className="text-2xl mr-5">3.</span>
                            <div className='text-[#F5E9CF]'>
                                <h3 className='text-black'>Target Your Audience</h3>
                                <p className='mb-4'>Distribute your survey to the right audience. Share it through email, social media, or embed it on your website to reach your target demographic.</p>
                            </div>
                        </div>

                        <div className="flex mb-30">
                            <span  className="text-2xl mr-5">4.</span>
                            <div className='text-[#F5E9CF]'>
                                <h3 className='text-black'>Secure Payment Integration</h3>
                                <p className='mb-4'>Unlock premium features with our secure payment integration. Choose from flexible payment options to enhance your survey experience.</p>
                            </div>
                        </div>

                        <div className="flex mb-30">
                            <span  className="text-2xl mr-5">5.</span>
                            <div className='text-[#F5E9CF]'>
                                <h3 className='text-black'>User-Friendly Responses</h3>
                                <p className='mb-4'>Users can easily provide responses with a user-friendly interface. Capture valuable data and feedback through a streamlined response collection process.</p>
                            </div>
                        </div>

                        <div className="flex mb-30">
                            <span  className="text-2xl mr-5">6.</span>
                            <div className=' text-[#F5E9CF]'>
                                <h3 className='text-black'>Analytics and Reporting</h3>
                                <p className='mb-4'>Dive into detailed analytics and reports. Gain insights from the collected data to make informed decisions and optimize your strategies for better results.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <p>Ready to get started?</p>
                        <Link to="/register" className='inline-block px-4 py-2 bg-purple-800 text-white no-underline rounded-md text-lg transition duration-300 ease-in-out hover:bg-purple-600'>Sign Up Now 🚀</Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HowItWorks;