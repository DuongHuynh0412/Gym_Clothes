import {Box, Flex, IconButton, Link, Text, TextField} from "@radix-ui/themes";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import './HeaderNavbar.css'

export default function HeaderNavbar() {
    return (
        <NavigationMenu.Root>
            <NavigationMenu.List className="flex gap-8">
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="nav-item">
                        Women
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content
                        className="nav-menu-content"
                    >
                        <Flex gap={'4'} justify={'center'} className={'my-3'}>
                            <div className="nav-menu-column">
                                <Text size={'3'} weight={'bold'}>Leggings</Text>
                                <ul>
                                    <li>
                                        <a href="/collections/leggings/womens">
                                            <Text size={'2'}>All Leggings</Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/collections/high-waisted-leggings/womens">
                                            <Text size={'2'}>High-Waisted Leggings</Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/collections/petite-leggings/womens">
                                            <Text size={'2'}>Petite Leggings</Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/collections/tall-leggings/womens">
                                            <Text size={'2'}>Tall Leggings</Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/collections/flare-leggings/womens">
                                            <Text size={'2'}>Flare Leggings</Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/collections/compression-fit-leggings/womens">
                                            <Text size={'2'}>Compression Fit Leggings</Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/collections/scrunch-butt-leggings/womens">
                                            <Text size={'2'}>Scrunch Butt Leggings</Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/collections/black-leggings/womens">
                                            <Text size={'2'}>Black Leggings</Text>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Flex>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                {/* Men */}
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="nav-item">
                        Men
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="nav-menu-content">
                        <div className="flex gap-4">
                            <div className="nav-menu-column">
                                <h3 className="text-red-500">Men's Sale</h3>
                                <ul className="flex flex-col">
                                    <li><a href="#">All Sale</a></li>
                                    <li><a href="#">Up to 50% Off T-Shirts</a></li>
                                    <li><a href="#">Up to 50% Off Shorts</a></li>
                                </ul>
                            </div>
                            <div className="nav-menu-column">
                                <h3>Products</h3>
                                <ul>
                                    <li><a href="#">All Products</a></li>
                                    <li><a href="#">T-Shirts & Tops</a></li>
                                    <li><a href="#">Shorts</a></li>
                                    <li><a href="#">Joggers & Sweatpants</a></li>
                                </ul>
                            </div>
                            <div className="nav-menu-column">
                                <h3>Explore</h3>
                                <ul>
                                    <li><a href="#">Your Edit</a></li>
                                    <li><a href="#">Training Guide</a></li>
                                </ul>
                            </div>
                        </div>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                {/*/!* Accessories *!/*/}
                {/*<NavigationMenu.Item>*/}
                {/*    <NavigationMenu.Trigger className="nav-item">*/}
                {/*        Accessories*/}
                {/*    </NavigationMenu.Trigger>*/}
                {/*    <NavigationMenu.Content className="nav-menu-content">*/}
                {/*        <div className="flex gap-4">*/}
                {/*            <div className="nav-menu-column">*/}
                {/*                <h3>Accessories</h3>*/}
                {/*                <ul>*/}
                {/*                    <li><a href="#">All Accessories</a></li>*/}
                {/*                    <li><a href="#">Bags</a></li>*/}
                {/*                    <li><a href="#">Hats</a></li>*/}
                {/*                    <li><a href="#">E-Gift Card</a></li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*            <div className="nav-menu-column">*/}
                {/*                <h3>Explore</h3>*/}
                {/*                <ul>*/}
                {/*                    <li><a href="#">Gift Ideas</a></li>*/}
                {/*                    <li><a href="#">Accessory Guide</a></li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </NavigationMenu.Content>*/}
                {/*</NavigationMenu.Item>*/}
            </NavigationMenu.List>

            <NavigationMenu.Viewport className="absolute left-0 top-full"/>
        </NavigationMenu.Root>
    );
}