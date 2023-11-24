
const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            avatar: 'https://i.ibb.co/dkztDtz/pretty-smiling-woman-cafe.jpg',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 2,
            avatar: 'https://i.ibb.co/9bznm4s/portrait-blonde-girl-looking-photographer.jpg',
            testimonial: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
            id: 3,
            avatar: 'https://i.ibb.co/Xb3pX3L/smiling-young-man-with-crossed-arms-outdoors.jpg',
            testimonial: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            id: 4,
            avatar: 'https://i.ibb.co/j8XnwHt/smiling-girl-with-ponytail-colourful-pullover-snowy-day.jpg',
            testimonial: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 5,
            avatar: 'https://i.ibb.co/jzjZMGs/beautiful-caucasian-businesswoman-suit.jpg',
            testimonial: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        },
        {
            id: 6,
            avatar: 'https://i.ibb.co/XYPRc82/43608.jpg',
            testimonial: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        },
    ];

    return (
        <section className="bg-gray-100 mt-10 rounded-xl py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                            <img
                                src={testimonial.avatar}
                                alt="Avatar"
                                className="w-16 h-16 rounded-full mb-4 mx-auto"
                            />
                            <p className="text-gray-700 text-base">{testimonial.testimonial}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
