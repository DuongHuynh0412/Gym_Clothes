import {Box, Flex, IconButton, Link, TextField} from "@radix-ui/themes";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {ClockIcon, HeartIcon, LockClosedIcon, MagnifyingGlassIcon, PersonIcon} from "@radix-ui/react-icons";

export default function HeaderNavbar() {
    return (
        <>
            <Flex className="header_navbar" align="center" justify="between" px="6" py="4">
                <Link className="flex items-center cursor-pointer logo" href="/">
                    <img
                        src="./gymshark-logo.svg"
                        alt="Gymshark Logo"
                    />
                </Link>

                <NavigationMenu.Root>
                    <NavigationMenu.List className="flex gap-8">
                        {/* Women */}
                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger className="nav-item">
                                Women
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content
                                className="nav-menu-content"
                            >
                                <div className="flex gap-4">
                                    {/* Mid-Season Sale */}
                                    <div className="nav-menu-column">
                                        <h3 className="text-red-500">Mid-Season Sale</h3>
                                        <ul>
                                            <li><a href="#">All Sale</a></li>
                                            <li><a href="#">Up to 50% Off Leggings</a></li>
                                            <li><a href="#">Up to 50% Off Sports Bras</a></li>
                                            <li><a href="#">Up to 50% Off T-Shirts & Tops</a></li>
                                            <li><a href="#">Up to 50% Off Shorts</a></li>
                                            <li><a href="#">Up to 50% Off Black Essentials</a></li>
                                            <li><a href="#">Styles Under $30</a></li>
                                            <li><a href="#">40% Off And Above</a></li>
                                        </ul>
                                    </div>

                                    {/* Leggings */}
                                    <div className="nav-menu-column">
                                        <h3>Leggings</h3>
                                        <ul>
                                            <li><a href="#">All Leggings</a></li>
                                            <li><a href="#">High-Waisted Leggings</a></li>
                                            <li><a href="#">Black Leggings</a></li>
                                            <li><a href="#">Seamless Leggings</a></li>
                                            <li><a href="#">Scrunch Butt Leggings</a></li>
                                            <li><a href="#">Leggings With Pockets</a></li>
                                        </ul>
                                    </div>

                                    {/* Products */}
                                    <div className="nav-menu-column">
                                        <h3>Products</h3>
                                        <ul>
                                            <li><a href="#">All Products</a></li>
                                            <li><a href="#">New Arrivals</a></li>
                                            <li><a href="#">Leggings</a></li>
                                            <li><a href="#">T-Shirts & Tops</a></li>
                                            <li><a href="#">Sports Bras</a></li>
                                            <li><a href="#">Hoodies & Sweatshirts</a></li>
                                            <li><a href="#">Jackets</a></li>
                                            <li><a href="#">Shorts</a></li>
                                            <li><a href="#">Joggers & Sweatpants</a></li>
                                            <li><a href="#">Crop Tops</a></li>
                                            <li><a href="#">Tank Tops</a></li>
                                            <li><a href="#">Sweatshirts</a></li>
                                            <li><a href="#">Underwear & Basics</a></li>
                                            <li><a href="#">Bodysuits</a></li>
                                            <li><a href="#">Modest Workout Clothes & Hijabs</a></li>
                                        </ul>
                                    </div>

                                    {/* Explore */}
                                    <div className="nav-menu-column">
                                        <h3>Explore</h3>
                                        <ul>
                                            <li><a href="#">Your Edit</a></li>
                                            <li><a href="#">Leggings Guide</a></li>
                                            <li><a href="#">Sports Bra Guide</a></li>
                                            <li><a href="#">Modest Hub</a></li>
                                        </ul>
                                        <h3 className="mt-4">Accessories</h3>
                                        <ul>
                                            <li><a href="#">All Accessories</a></li>
                                            <li><a href="#">E-Gift Card</a></li>
                                        </ul>
                                    </div>

                                    {/* Featured Images */}
                                    <div className="nav-menu-column">
                                        <h3>Featured</h3>
                                        <img src="mid-season-sale.jpg" alt="Mid Season Sale"
                                             className="nav-menu-image mb-2"/>
                                        <p className="text-sm">Mid Season Sale</p>
                                        <img src="must-haves.jpg" alt="Must Haves" className="nav-menu-image mt-2"/>
                                        <p className="text-sm">Must-Haves</p>
                                    </div>
                                </div>
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

                        {/* Accessories */}
                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger className="nav-item">
                                Accessories
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className="nav-menu-content">
                                <div className="flex gap-4">
                                    <div className="nav-menu-column">
                                        <h3>Accessories</h3>
                                        <ul>
                                            <li><a href="#">All Accessories</a></li>
                                            <li><a href="#">Bags</a></li>
                                            <li><a href="#">Hats</a></li>
                                            <li><a href="#">E-Gift Card</a></li>
                                        </ul>
                                    </div>
                                    <div className="nav-menu-column">
                                        <h3>Explore</h3>
                                        <ul>
                                            <li><a href="#">Gift Ideas</a></li>
                                            <li><a href="#">Accessory Guide</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                    </NavigationMenu.List>

                    <NavigationMenu.Viewport className="absolute left-0 top-full"/>
                </NavigationMenu.Root>

                <div className="flex gap-1 items-center">
                    <Box>
                        <TextField.Root placeholder="Search the docs…" size="1">
                            <TextField.Slot>
                                <MagnifyingGlassIcon height="16" width="16"/>
                            </TextField.Slot>
                        </TextField.Root>
                    </Box>

                    {/* Icons on the Right */}
                    <div className="flex gap-6">
                        <HeartIcon/>
                        <PersonIcon/>
                        <LockClosedIcon/>
                    </div>
                </div>
            </Flex>
            <div style={{height: '3.5em', width: '100%'}}></div>
        </>
    );
}