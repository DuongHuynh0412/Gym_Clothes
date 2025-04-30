import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Box, Button, Link} from "@radix-ui/themes";
import {ChevronRightIcon,ChevronLeftIcon} from "@radix-ui/react-icons";


import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./MainSaleEventSlides.css"

export default function MainSaleEventSlides({id, SectionTitle}) {

    const promos = [
        {
            image: 'https://via.placeholder.com/300x400', // Replace with your image
            label: 'Mid-Season Sale',
            offer: 'Extra 20% Off Pants & Pullovers with Code SWEATS20',
            buttonText: 'Shop Now',
        },
        {
            image: 'https://via.placeholder.com/300x400',
            label: 'Mid-Season Sale',
            offer: 'Leggings from $25',
            buttonText: 'Shop Now',
        },
        {
            image: 'https://via.placeholder.com/300x400',
            label: 'Mid-Season Sale',
            offer: 'Shorts from $10',
            buttonText: 'Shop Now',
        },
        {
            image: 'https://via.placeholder.com/300x400',
            label: 'Mid-Season Sale',
            offer: 'Sports Bras from $14',
            buttonText: 'Shop Now',
        },
        {
            image: 'https://via.placeholder.com/300x400',
            label: 'Mid-Season Sale',
            offer: 'Sports Bras from $14',
            buttonText: 'Shop Now',
        },
        {
            image: 'https://via.placeholder.com/300x400',
            label: 'Mid-Season Sale',
            offer: 'Sports Bras from $14',
            buttonText: 'Shop Now',
        },
        {
            image: 'https://via.placeholder.com/300x400',
            label: 'Mid-Season Sale',
            offer: 'Sports Bras from $14',
            buttonText: 'Shop Now',
        }
    ];

    const navigationOptions = {
        prevEl: `.swiper-custom-button-prev-${id}`,
        nextEl: `.swiper-custom-button-next-${id}`,
    }

    return (
        <section className="sale-event-section">
            {
                SectionTitle && (
                    <SectionTitle/>
                )
            }
            <section className={'navigation-button-group justify-end'}>
                <Button className={`button-prev swiper-custom-button-prev-${id}`}>
                    <ChevronLeftIcon/>
                </Button>
                <Button className={`button-next swiper-custom-button-next-${id}`}>
                    <ChevronRightIcon/>
                </Button>
            </section>
            <section className={'sale-event-swipper-section'}>
                <Swiper
                    className="sale-event-swipper"
                    slidesPerView={4}
                    modules={[Navigation]}
                    spaceBetween={5}
                    navigation={navigationOptions}
                >
                    {
                        promos.map((item, index) => {
                            return (
                                <SwiperSlide
                                    key={index}
                                    className={'rounded-b-lg'}
                                >
                                    <div className={'absolute rounded-b-lg'}>
                                        <img
                                            className={'rounded-b-lg'}
                                            src={`/mid-season-image-${index + 1}.avif`}
                                            alt=""
                                        />
                                    </div>
                                    hello
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </section>
        </section>
    );
}