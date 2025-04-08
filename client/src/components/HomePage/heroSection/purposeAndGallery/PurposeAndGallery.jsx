import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination  } from 'swiper/modules';
import { useMediaPredicate } from "react-media-hook";
import { gallery } from '../../../../data';
import { Link } from 'react-router';
import './purposeAndGallery.css';
import 'swiper/css';
import "swiper/css/pagination";


const PurposeAndGallery = () => {

    const media = useMediaPredicate("(max-width: 580px)");

    function shuffleArray(array) {
        // Create a copy of the array to avoid modifying the original array
        let shuffledArray = array.slice();
      
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          // Generate a random index between 0 and i
          const j = Math.floor(Math.random() * (i + 1));
      
          // Swap elements at i and j
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
      
        return shuffledArray;
      }
     
      const random = shuffleArray(gallery);
    // const random = gallery.sort((a, b) => 0.5 - Math.random() * gallery.length);
    const slide = random.slice(0, 3)

    return (
        <div className='purpose-and-gallery'>
            <div className='purpose'>
                <h1> Our Purpose</h1>
                <p>
                Omojesu Children Global Initiative exists to empower and uplift children and youth worldwide by providing education, resources, and opportunities. Our aim is to break down barriers and create a nurturing environment where every young person can thrive and achieve their full potential. Through targeted charity programs, educational support, and impactful media campaigns, we seek to inspire positive change and foster a brighter future for children from all walks of life.
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