import React from 'react';

const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            avatar: 'url_to_avatar_image_1.jpg',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 2,
            avatar: 'url_to_avatar_image_2.jpg',
            testimonial: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
            id: 3,
            avatar: 'url_to_avatar_image_3.jpg',
            testimonial: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            id: 4,
            avatar: 'url_to_avatar_image_4.jpg',
            testimonial: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 5,
            avatar: 'url_to_avatar_image_5.jpg',
            testimonial: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        },
        {
            id: 6,
            avatar: 'url_to_avatar_image_6.jpg',
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
