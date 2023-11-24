import './howItWorks.css'

const HowItWorks = () => {
    return (
        <>
            <div className="mt-10">
                <section className="how-it-works-section">
                    <h2>How It Works 🛠</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <div className="step">
                            <span className="step-number">1.</span>
                            <div className='text-[#F5E9CF]'>
                                <h3>Create Your Survey or Poll</h3>
                                <p>Start by creating your survey or poll. Add up to six questions with multiple-choice answers, open-ended responses, or a combination of both.</p>
                            </div>
                        </div>

                        <div className="step">
                            <span className="step-number">2.</span>
                            <div className='text-[#F5E9CF]'>
                                <h3>Design and Personalize</h3>
                                <p>Make your survey visually appealing. Customize the appearance with themes, colors, and branding to create a unique and engaging experience for your audience.</p>
                            </div>
                        </div>

                        <div className="step">
                            <span className="step-number">3.</span>
                            <div className='text-[#F5E9CF]'>
                                <h3>Target Your Audience</h3>
                                <p>Distribute your survey to the right audience. Share it through email, social media, or embed it on your website to reach your target demographic.</p>
                            </div>
                        </div>

                        <div className="step">
                            <span className="step-number">4.</span>
                            <div className='text-[#F5E9CF]'>
                                <h3>Secure Payment Integration</h3>
                                <p>Unlock premium features with our secure payment integration. Choose from flexible payment options to enhance your survey experience.</p>
                            </div>
                        </div>

                        <div className="step">
                            <span className="step-number">5.</span>
                            <div className='text-[#F5E9CF]'>
                                <h3>User-Friendly Responses</h3>
                                <p>Users can easily provide responses with a user-friendly interface. Capture valuable data and feedback through a streamlined response collection process.</p>
                            </div>
                        </div>

                        <div className="step">
                            <span className="step-number">6.</span>
                            <div className='text-[#F5E9CF]'>
                                <h3>Analytics and Reporting</h3>
                                <p>Dive into detailed analytics and reports. Gain insights from the collected data to make informed decisions and optimize your strategies for better results.</p>
                            </div>
                        </div>
                    </div>

                    <div className="cta">
                        <p>Ready to get started?</p>
                        <a href="#sign-up" className="cta-button">Sign Up Now 🚀</a>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HowItWorks;