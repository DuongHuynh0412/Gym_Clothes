import {useParams} from 'react-router-dom';
import Sidebar from '../../components/SidebarComponent';
import ContainerComponent from '../../components/ContainerComponent';
import ProductInstructSection from "../../components/ProductInstructSection/ProductInstructSection";
import MainProductCollectionSlides from "../../components/MainProductCollectionSlides/MainProductCollectionSlides";
import ProductPresentation from "../../components/ProductPresentation/ProductPresentation";
import HeaderPromotionSlides from "../../components/HeaderPromotionSlides/HeaderPromotionSlides";
import './SaleArea.css'

function SaleArea() {
    return (
        <>
            <HeaderPromotionSlides/>
            <ProductInstructSection/>
            <MainProductCollectionSlides
                folder={'legging'}
                id={'main-sale-event-slides'}
            />
            <ProductPresentation/>
        </>
    );
}

export default SaleArea;
