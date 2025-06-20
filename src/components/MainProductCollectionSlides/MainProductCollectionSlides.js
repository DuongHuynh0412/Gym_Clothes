import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Box, Button, Link, Text } from "@radix-ui/themes";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./MainProductCollectionSlides.css";
import { useParams } from "react-router-dom";
import { GetProductsInCollection } from "./MainProductCollectionSlides.service";
import { useEffect, useState } from "react";
import { convertImageUrl } from "../../commons/method.common";

export default function MainProductCollectionSlides({ id, SectionTitle, folder }) {
    const [data, setData] = useState([]);
    const [group, setGroup] = useState(false);
    const [error, setError] = useState(null); // Thêm state để lưu lỗi

    const params = useParams();

    useEffect(() => {
        GetProductsInCollection(params)
            .then(result => {
                if (result.success === false) {
                    throw new Error(result.message || 'Failed to fetch products');
                }
                setData(result.data);
                setGroup(result.groupFlag);
            })
            .catch(err => {
                setError(err); // Lưu lỗi vào state
            });
    }, [params]);

    // Ném lỗi trong render phase để ErrorBoundary bắt
    if (error) {
        throw error;
    }

    const navigationOptions = {
        prevEl: `.swiper-custom-button-prev-${id}`,
        nextEl: `.swiper-custom-button-next-${id}`,
    };

    return (
        <>
            {group ? (
                <section className="product-type-section">
                    {SectionTitle && <SectionTitle />}
                    <section className={'navigation-button-group justify-end'}>
                        <Button className={`button-prev swiper-custom-button-prev-${id}`}>
                            <ChevronLeftIcon />
                        </Button>
                        <Button className={`button-next swiper-custom-button-next-${id}`}>
                            <ChevronRightIcon />
                        </Button>
                    </section>
                    <section className={'product-type-swipper-section'}>
                        <Swiper
                            className="product-type-swipper"
                            slidesPerView={6.3}
                            modules={[Navigation]}
                            spaceBetween={5}
                            navigation={navigationOptions}
                        >
                            {data.map((item, index) => {
                                const selectedProduct = item?.ProductDetail?.ProductColorDetail;
                                let link = `/collections/${item.Product_Collection_Code}`;
                                if (Object.keys(params).includes("gender")) {
                                    link += `/${params.gender}`;
                                }
                                return (
                                    <SwiperSlide
                                        key={index}
                                        className={'rounded-b-lg product-type-swipper-slide'}
                                    >
                                        <Link
                                            href={link}
                                            underline="none"
                                            color="inherit"
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                                color: 'black'
                                            }}
                                        >
                                            <div className={'absolute rounded-b-lg'}>
                                                <div className={'collection-image'}>
                                                    <img
                                                        className={'rounded-lg'}
                                                        src={convertImageUrl(selectedProduct?.Product_Color_Images?.[0]?.url)}
                                                        alt={convertImageUrl(selectedProduct?.Product_Color_Images?.[0]?.fileName)}
                                                    />
                                                </div>
                                                <div className={'mt-2'}>
                                                    <Text as="p" size='1' weight="bold" className={'text-left text-inherit'}>
                                                        {item.Product_Collection_Name.toUpperCase()}
                                                    </Text>
                                                    <Text as="p" size='1' className={'text-left text-inherit'}>
                                                        {item.Product_Collection_ShortDescription}
                                                    </Text>
                                                </div>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </section>
                </section>
            ) : (
                <></>
            )}
        </>
    );
}