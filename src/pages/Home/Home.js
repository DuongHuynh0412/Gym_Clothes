import MainBannerSection from "../../components/MainBannerSection/MainBannerSection";
import MainSaleEventSlides from "../../components/MainSaleEventSlides/MainSaleEventSlides";
import MainBestsellersSection from "../../components/MainBestSellerSection/MainBestSellerSection";
import HeaderPromotionSlides from "../../components/HeaderPromotionSlides/HeaderPromotionSlides";

function Home() {
    return (
        <>
            <HeaderPromotionSlides/>
            <MainBannerSection/>
            <MainSaleEventSlides
                folder={'mid-season-image'}
                id={'main-sale-event-slides'}
            />
            <div>
                <MainSaleEventSlides
                    id={'Mid-Season-Sale'}
                    folder={'mid-season-image'}
                    SectionTitle={() => {
                        return (
                            <>
                                <h2 className="text-2xl font-bold text-center">Mid Season Sale</h2>
                            </>
                        )
                    }
                    }
                />
            </div>
            <MainBestsellersSection/>
            <div>
                <MainSaleEventSlides
                    id={'POPULAR-RIGHT-NOW'}
                    folder={'mid-season-image'}
                    SectionTitle={() => {
                        return (
                            <>
                                <h2 className="text-2xl font-bold text-center">POPULAR RIGHT NOW</h2>
                            </>
                        )
                    }
                    }
                />
            </div>
            <div>
                <MainSaleEventSlides
                    id={'How-do-you-train'}
                    folder={'mid-season-image'}
                    SectionTitle={() => {
                        return (
                            <>
                                <h2 className="text-2xl font-bold text-center">How do you train?</h2>
                            </>
                        )
                    }
                    }
                />
            </div>
            <div>
                <MainSaleEventSlides
                    id={'WAIT-THERE’S-MORE…'}
                    folder={'mid-season-image'}
                    SectionTitle={() => {
                        return (
                            <>
                                <h2 className="text-2xl font-bold text-center">WAIT THERE’S MORE…</h2>
                            </>
                        )
                    }
                    }
                />
            </div>
        </>
    );
}

export default Home;
