import React from 'react';
import {Text} from '@radix-ui/themes';

const ProductInstructSection = () => {
    return (
        <section className="text-center px-4 py-12 max-w-5xl mx-auto">
            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Womens</p>
            <h1 className="text-4xl font-bold mt-2 mb-4">LEGGINGS</h1>
            <Text size="6">The quick brown fox jumps over the lazy dog.
                Step into confidence and feel ready to push yourself to new heights with our workout and gym leggings.
                Physique-enhancing, sweat-wicking and ultra-comfortable, our leggings will have you feeling just as good on
                rest days as you do in the gym.
                <button className="ml-1 text-sm text-black font-semibold hover:underline">See more</button>
            </Text>

            <div className="mt-6 space-x-2 text-sm font-semibold">
                <a href="#" className="text-black hover:underline">High waisted leggings</a>
                <span>|</span>
                <a href="#" className="text-black hover:underline">Scrunch bum leggings</a>
                <span>|</span>
                <a href="#" className="text-black hover:underline">Leggings with pockets</a>
            </div>
        </section>
    );
};

export default ProductInstructSection;
