import {useParams} from 'react-router-dom';
import Sidebar from '../../components/SidebarComponent';
import ContainerComponent from '../../components/ContainerComponent';
import ProductInstructSection from "../../components/ProductInstructSection/ProductInstructSection";
import MainProductTypeSlides from "../../components/MainProductTypeSlides/MainProductTypeSlides";
import ProductPresentation from "../../components/ProductPresentation/ProductPresentation";
import HeaderPromotionSlides from "../../components/HeaderPromotionSlides/HeaderPromotionSlides";

function SaleArea() {
    const params = useParams();
    return (
        <>
            <HeaderPromotionSlides/>
            <ProductInstructSection/>
            <MainProductTypeSlides
                folder={'legging'}
                id={'main-sale-event-slides'}
            />
            <ProductPresentation/>
        </>
    );
}

export default SaleArea;
