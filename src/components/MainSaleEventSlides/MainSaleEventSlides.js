import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Box, Button, Link} from "@radix-ui/themes";
import {ChevronRightIcon, ChevronLeftIcon} from "@radix-ui/react-icons";


import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./MainSaleEventSlides.css"
import {convertImageUrl} from "../../commons/method.common";
import {useNavigate} from "react-router-dom";

export default function MainSaleEventSlides({id, articleData, SectionTitle}) {
    const navigate = useNavigate();

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
                        articleData ?
                            (
                                articleData?.map((item, index) => {
                                    return (
                                        <SwiperSlide
                                            key={index}
                                            className={'rounded-b-lg cursor-pointer'}
                                        >
                                            <div className={'absolute rounded-b-lg'}>
                                                <img
                                                    onClick={() => {
                                                        navigate(`/products/${item.Product_Color_Code}`)
                                                    }}
                                                    className={'rounded-lg'}
                                                    src={convertImageUrl(item.ImageUrl)}
                                                    alt=""
                                                />
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            )
                            :
                            ""
                    }
                </Swiper>
            </section>
        </section>
    );
}