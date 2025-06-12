import React from 'react';
import {StarFilledIcon} from '@radix-ui/react-icons';
import {Tooltip} from 'radix-ui';
import {Container, Flex, Text, Progress, Grid} from "@radix-ui/themes";
import './ProductReviewSection.css'

const ProductReviewSection = () => {
    return (
        <Container size="3">
            <Flex direction={'column'} gapY={'5'}>
                <Flex direction={'column'}>
                    <Text size='7' weight='bold'>REVIEWS</Text>
                    <Flex align='center' className={'mt-3'}>
                        <Text size='7' weight='bold'>4.6</Text>
                        <Flex align='center' className={"ml-6"} gap={'2'}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <StarFilledIcon key={star} className="w-7 h-7 text-yellow-400"/>
                            ))}
                        </Flex>
                    </Flex>
                    <Text size='1' className={'mt-2'}>Based on 215 reviews</Text>
                </Flex>
                <Flex direction='column' className={'w-1/2'}>
                    <Text size='2' weight='bold'>RATING SNAPSHOT</Text>
                    <Flex direction={"column"} className={'mt-2'}>
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <div className="grid grid-cols-8 items-center">
                                <Text size="2" weight={'medium'} className="grid-col-span-2">
                                    {rating} (168)
                                </Text>
                                <Progress
                                    value={75}
                                    size="1"
                                    color="gray"
                                    highContrast
                                    className="grid-col-span-8"
                                />
                            </div>
                        ))}
                    </Flex>
                </Flex>
            </Flex>

            {/*/!* Average Ratings *!/*/}
            {/*<div className="mt-6">*/}
            {/*    <h3 className="text-lg font-semibold mb-2">AVERAGE RATINGS</h3>*/}
            {/*    <div className="flex space-x-2">*/}
            {/*        <Tooltip>*/}
            {/*            <Tooltip.Trigger asChild>*/}
            {/*                <button className="px-4 py-2 bg-black text-white rounded-full">LENGTH</button>*/}
            {/*            </Tooltip.Trigger>*/}
            {/*            <Tooltip.Content className="bg-gray-800 text-white p-2 rounded">*/}
            {/*                Too short - Spot on - Too long*/}
            {/*            </Tooltip.Content>*/}
            {/*        </Tooltip>*/}
            {/*        <button className="px-4 py-2 bg-gray-200 rounded-full">SIZING</button>*/}
            {/*        <button className="px-4 py-2 bg-gray-200 rounded-full">VALUE</button>*/}
            {/*        <button className="px-4 py-2 bg-gray-200 rounded-full">QUALITY</button>*/}
            {/*        <button className="px-4 py-2 bg-gray-200 rounded-full">COMFORT</button>*/}
            {/*        <button className="px-4 py-2 bg-gray-200 rounded-full">SQUAT-PROOF</button>*/}
            {/*    </div>*/}
            {/*    <div className="mt-2 flex items-center">*/}
            {/*        <div className="flex-1 h-1 bg-gray-200">*/}
            {/*            <div className="h-1 bg-black" style={{ width: '70%' }} />*/}
            {/*        </div>*/}
            {/*        <span className="ml-2 text-sm text-gray-600">Too short</span>*/}
            {/*        <span className="ml-4 text-sm text-gray-600">Spot on</span>*/}
            {/*        <span className="ml-4 text-sm text-gray-600">Too long</span>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/* Individual Review */}
            <div className="mt-6 border-t pt-4">
                <div className="flex items-center mb-2">
                    <span className="text-sm text-green-600">Ny82</span>
                    <span className="ml-2 text-sm text-gray-600">● Verified buyer</span>
                    <span className="ml-2 text-sm text-gray-600">5 ★★★★★ • a day ago</span>
                </div>
                <p className="text-sm">Soft toned pink colour</p>
                <p className="text-sm text-gray-600">
                    I usually wear size small at Gymsharks but I sized up for Whitney collection this time. Waist
                    27inch-hip 36 inch. Height 158cm wt:54kg... rectangular body shape... it has ... See more
                </p>
                <div className="flex space-x-2 mt-2">
                    <button className="text-blue-600 text-sm">👍 0</button>
                    <button className="text-blue-600 text-sm">👎 0</button>
                </div>
            </div>
        </Container>
    );
};

export default ProductReviewSection;