import "./MainBannerSection.css"
import React, {useRef, useState} from "react";
import {Box} from "@radix-ui/themes";
import {PauseIcon, PlayIcon} from "@radix-ui/react-icons";
import CommonControlButton from "../CommonControlButton/CommonControlButton";

export default function MainBannerSection() {
    const [pause, setPause] = useState(false);
    const bannerVideoRef = useRef(null);

    const togglePause = () => {
        if (bannerVideoRef.current.paused) {
            bannerVideoRef.current.play();
        } else {
            bannerVideoRef.current.pause();
        }
        setPause(bannerVideoRef.current.paused);
    };

    return (
        <section className="banner">
            <Box className={"background-video"}>
                <video
                    ref={bannerVideoRef}
                    src={'/Mid_Season_Sale_-_Desktop_-_Look_8_-_English.mp4'}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    // controls={}
                    playsInline
                    // className={`rounded-none shadow-md ${className}`}
                    // style={{width}}
                >
                    Your browser does not support the video tag.
                </video>
            </Box>
            <div className="relative z-10">
                <p className="text-lg md:text-xl uppercase tracking-wider">Mid-Season Sale</p>
                <h1 className="text-4xl md:text-7xl font-bold uppercase mt-2">Up to 50% Off*</h1>
                <p className="text-lg md:text-xl uppercase tracking-wider mt-2">More Discounts Added</p>

                <div className="mt-6 flex justify-center space-x-4">
                    <a href="#"
                       className="bg-white text-black px-6 py-3 rounded-full font-semibold uppercase hover:bg-gray-200"
                       style={{color: 'black'}}
                    >
                        Shop Women's</a>
                    <a href="#"
                       className="bg-gray-600 text-white px-6 py-3 rounded-full font-semibold uppercase hover:bg-gray-700">Shop
                        Men's</a>
                </div>


            </div>
            <CommonControlButton
                pause={pause}
                togglePause={togglePause}
                className={'control-button'}
            />
        </section>
    );
}