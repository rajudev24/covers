// CustomSlider.js
import React from 'react';
import Slider from 'react-slick';

import Image from 'next/image';

const CustomSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {[0, 1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="slider-image">
                    <Image
                        src={'/img/artist.jpg'}
                        alt={`artist image ${index + 1}`}
                        width={300}
                        height={200}
                        loading='lazy'
                        className='rounded-xl'
                    />
                </div>
            ))}
        </Slider>
    );
};

export default CustomSlider;
