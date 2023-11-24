import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import HowItWorks from "../HowItWorks/HowItWorks";
import Testimonials from "../Testimonials/Testimonials ";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Testimonials></Testimonials>
            <Faq></Faq>
            <h2 className='text-3xl'>This is home</h2>

        </div>
    );
};

export default Home;