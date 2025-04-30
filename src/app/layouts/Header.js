import {useNavigate} from 'react-router-dom';
import HeaderPromotionSlides from "../../components/HeaderPromotionSlides/HeaderPromotionSlides";
import HeaderNavbar from "../../components/HeaderNavbar/HeaderNavbar";

function Header() {
    const navigate = useNavigate();

    const handleDirect = (type) => {
        navigate(`/sales-product/${type}`);
    };

    return (
        <header className="font-[sans-serif]">
            <HeaderNavbar/>
            <HeaderPromotionSlides/>
        </header>
    );
}

export default Header;