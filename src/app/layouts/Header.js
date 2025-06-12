import {useNavigate} from 'react-router-dom';
import HeaderPromotionSlides from "../../components/HeaderPromotionSlides/HeaderPromotionSlides";
import HeaderNavbar from "../../components/HeaderNavbar/HeaderNavbar";
import HeaderShoppingBagModal from '../../components/HeaderShoppingBagModal/HeaderShoppingBagModal'
import {Box, Flex, Link, TextField} from "@radix-ui/themes";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {HeartIcon, LockClosedIcon, MagnifyingGlassIcon, PersonIcon} from "@radix-ui/react-icons";
import HeaderLoveModal from "../../components/HeaderLoveModal/HeaderLoveModal";
import HeaderAccountButton from "../../components/HeaderAccountButton/HeaderAccountButton";

function Header() {
    const navigate = useNavigate();

    const handleDirect = (type) => {
        navigate(`/sales-product/${type}`);
    };

    return (
        <header className="font-[sans-serif]">
            <Flex className="header_navbar" align="center" justify="between" px="6">
                <Link className="flex items-center cursor-pointer logo" href="/">
                    <img
                        src="http://localhost:3000/gymshark-logo.svg"
                        alt="Gymshark Logo"
                    />
                </Link>
                <HeaderNavbar/>
                <div className="flex gap-1 items-center">
                    <div className="flex gap-6 items-center">
                        <HeaderLoveModal/>
                        <HeaderShoppingBagModal/>
                        <HeaderAccountButton/>
                    </div>
                </div>
            </Flex>
            <div style={{height: '3.5em', width: '100%'}}></div>
        </header>
    );
}

export default Header;