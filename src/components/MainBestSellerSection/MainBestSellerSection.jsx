import React from 'react';
import './MainBestSellerSection.css'

const MainBestsellersSection = () => {
    return (
        <section
            className={"best-seller-section"}
            style={{
                backgroundImage: `url('/best-seller-image.avif')`,
                backgroundSize:"contain"
            }}
        >
            <div className="absolute best-seller-title">
                <h2 className="text-4xl md:text-5xl font-bold uppercase">Bestsellers</h2>
                <p className="text-lg md:text-xl mt-4 max-w-md">
                    Upgrade your wardrobe with fresh lift and rest day styles in seasonal shades.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex space-x-4">
                    <a
                        href="#"
                        className="bg-white text-black px-6 py-3 rounded-full font-semibold uppercase hover:bg-gray-200"
                    >
                        Shop Women
                    </a>
                    <a
                        href="#"
                        className="bg-gray-600 text-white px-6 py-3 rounded-full font-semibold uppercase hover:bg-gray-700"
                    >
                        Shop Men
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MainBestsellersSection;