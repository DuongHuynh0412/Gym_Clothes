import ImgNotfound from '../../images/ImgNotfound.png';
import FooterProductType from "../../components/FooterProductType/FooterProductType";
import {Separator} from "radix-ui";
import React from "react";
import FooterProductDescription from "../../components/FooterProductDescription/FooterProductDescription";
import FooterMainSection from "../../components/FooterMainSectiion/FooterMainSection";

function Footer() {
    return (
        <>
            <FooterProductType/>
            <Separator.Root className="SeparatorRoot" style={{ margin: "15px 0" }} />
            <FooterProductDescription/>
            <Separator.Root className="SeparatorRoot" style={{ margin: "15px 0" }} />
            <FooterMainSection/>
        </>
    )
}

export default Footer;
