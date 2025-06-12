import MainBannerSection from "../../components/MainBannerSection/MainBannerSection";
import MainSaleEventSlides from "../../components/MainSaleEventSlides/MainSaleEventSlides";
import MainBestsellersSection from "../../components/MainBestSellerSection/MainBestSellerSection";
import HeaderPromotionSlides from "../../components/HeaderPromotionSlides/HeaderPromotionSlides";
import './Home.css'
import {useEffect, useState} from "react";
import {handleSearchArticle} from "../../services/article/Article.Service";

function Home() {
    const [SaleArticle, setSaleArticle] = useState([]);

    const fetchDataArticle = () => {
        handleSearchArticle().then((result) =>{
            setSaleArticle(result.result.data);
        })
    }

    useEffect(()=>{
        fetchDataArticle()
    },[])

    return (
        <>
            {/*<HeaderPromotionSlides/>*/}
            <MainBannerSection/>
            <div>
                <MainSaleEventSlides
                    id={SaleArticle?.[0]?._id}
                    articleData={SaleArticle?.[0]?.Article_Product_Colors}
                    SectionTitle={() => {
                        return (
                            <>
                                <h2 className="text-2xl font-bold text-center">{SaleArticle?.[0]?.Article_Title}</h2>
                            </>
                        )
                    }
                    }
                />
            </div>
            <MainBestsellersSection/>
            {
                SaleArticle?.slice(1)?.map(item => {
                    return (
                        <div>
                            <MainSaleEventSlides
                                id={item._id}
                                articleData={item.Article_Product_Colors}
                                SectionTitle={() => {
                                    return (
                                        <>
                                            <h2 className="text-2xl font-bold text-center">{item?.Article_Title}</h2>
                                        </>
                                    )
                                }
                                }
                            />
                        </div>
                    )
                })
            }
        </>
    );
}

export default Home;
