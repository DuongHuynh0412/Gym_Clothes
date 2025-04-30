import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {PauseIcon, PlayIcon} from '@radix-ui/react-icons';
import './HeaderPromotionSlides.css';
import {Pagination, Autoplay, Navigation} from 'swiper/modules';
import {Box, Link} from '@radix-ui/themes';
import {useState, useRef} from 'react';

export default function HeaderPromotionSlides() {
    const [pause, setPause] = useState(false);
    const swiperRef = useRef(null); // Reference to Swiper instance

    const slides = [
        {id: 1, text: '15% Student Discount ‍🎓', link: '/slide-1'},
        {id: 2, text: 'Free standard shipping over $75 🚚 ', link: '/slide-2'},
        {id: 3, text: 'REFER A FRIEND TO EARN $10 OFF YOUR NEXT PURCHASE OF $50+ 👭 ', link: '/slide-3'},
    ];

    // Always include all modules; Autoplay will be controlled via autoplay prop
    const modules = [Pagination, Navigation, Autoplay];

    // Handle pause/play toggle
    const togglePause = () => {
        if (swiperRef.current) {
            if (pause) {
                setTimeout(() => {
                    swiperRef.current.swiper.autoplay.start(); // Start autoplay
                }, 500)
            } else {
                swiperRef.current.swiper.autoplay.stop(); // Stop autoplay
            }
        }
        setPause(!pause);
    };

    return (
        <Box className="promotion-slider-section">
            <Swiper
                ref={swiperRef} // Attach Swiper ref
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={10}
                autoplay={
                    pause
                        ? false // Explicitly disable autoplay
                        : {
                            delay: 3000,
                            disableOnInteraction: false,
                        }
                }
                loop={true} // Loop can stay true; no need to toggle
                modules={modules}
                className="promotion-slider"
            >
                {slides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link href={item.link} className={'slide-item'}>
                            {item.text}
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Box className={'mr-8 cursor-pointer'}>
                {pause ? (
                    <PlayIcon fontSize="medium" fontWeight="bold" onClick={togglePause}/>
                ) : (
                    <PauseIcon fontSize="medium" fontWeight="bold" onClick={togglePause}/>
                )}
            </Box>
        </Box>
    );
}