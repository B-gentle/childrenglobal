import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import { useMediaPredicate } from "react-media-hook";
import { gallery } from '../../../../data';
import { Link } from 'react-router-dom';
import './purposeAndGallery.css';
import 'swiper/css';
import "swiper/css/pagination";


const PurposeAndGallery = () => {

    const media = useMediaPredicate("(max-width: 580px)");
    const random = gallery.sort( () => 0.5 - Math.random() * gallery.length);
    const slide = random.slice(0, 3)

    return (
        <div className='purpose-and-gallery'>
            <div className='purpose'>
                <h1> Our Purpose</h1>
                <p>
                    We strive to lead every child or parent that needs light to the ultimate source - (Jesus), so that they never walk in darkness because Jesus is this the only light that births life (John 8:12).
                </p>
                <div>
                    {media && <button className='hero-donate-button'>Donate</button>}
                    {!media && <Link to='/gallery'><button className='view-gallery-button'><span>View gallery</span><span><FaLongArrowAltRight /></span></button></Link>}
                </div>
            </div>
            <Link to='/gallery' className='gallery-thumbnail'>
                <Swiper
                    className='hero-swiper'
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Autoplay, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    {
                        gallery && slide.map((slide, index) => <SwiperSlide key={index}>
                        <img src={slide.img} alt='' />
                        <p>{slide.text}</p>
                    </SwiperSlide>
                    )
                    }
                </Swiper>
            </Link>
        </div>
    )
}

export default PurposeAndGallery