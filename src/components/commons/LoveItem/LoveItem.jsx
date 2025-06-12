import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as heartRegular} from "@fortawesome/free-regular-svg-icons";
import {faHeart as heartSolid} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import {GetLocalStorage, SetLocalStorage} from "../../../commons/method.common";
import {Dialog} from "radix-ui";
import './LoveItem.css'
import {Button, Flex, Grid, Text} from "@radix-ui/themes";
import {UpdateFavoriteList} from "../../../services/user/User.Service";

const LoveItem = ({colorCode, className}) => {
    const [loved, setLoved] = useState(false);
    const [openModal, setOpenModal] = useState(false)
    useEffect(() => {
        const wishListItems = GetLocalStorage('favorite-list');
        const wishList = JSON.parse(wishListItems);
        if (wishList?.includes(colorCode)) {
            setLoved(true)
        }
    }, []);

    const handleAddProductToWishList = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const token = GetLocalStorage('accessToken');
        if (!token) {
            setOpenModal(true);
            return;
        }
        const wishListItems = GetLocalStorage('favorite-list');
        const wishList = JSON.parse(wishListItems);
        let newWishList = [colorCode];
        if (wishList && Array.isArray(wishList)) {
            newWishList = [...wishList, ...newWishList]
        }
        UpdateFavoriteList(newWishList).then(result => {
            if (result === null) {
                throw new Error('updateFail')
            }
            SetLocalStorage({key: 'favorite-list', data: newWishList});
            setLoved(true);
        }).catch((e) => {
            return;
        })
    }

    const handleRemoveProductFromWishList = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const wishListItems = GetLocalStorage('favorite-list');
        const wishList = JSON.parse(wishListItems);
        const newWishList = wishList?.filter(item => item !== colorCode);
        UpdateFavoriteList(newWishList).then(result => {
            if (result === null) {
                throw new Error('updateFail')
            }
            SetLocalStorage('favorite-list', JSON.stringify(newWishList));
            setLoved(false);
        }).catch((e) => {
            return;
        })
    }

    return (
        <>
            {
                loved ?
                    (
                        <FontAwesomeIcon
                            icon={heartSolid}
                            className={`cursor-pointer ${className}`}
                            onClick={handleRemoveProductFromWishList}
                        />
                    )
                    :
                    (
                        <FontAwesomeIcon
                            icon={heartRegular} className={`cursor-pointer ${className}`}
                            onClick={handleAddProductToWishList}
                        />
                    )
            }
            <Dialog.Root
                open={openModal}
                onOpenChange={setOpenModal}
            >
                <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay"/>
                    <Dialog.Content
                        className={'loveDialog'}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                    >
                        <Dialog.Title className="loveDialogTitle">
                            <Flex direction={'row'} align={'center'} className={'gap-3 mb-4'} justify={'center'}>
                                <FontAwesomeIcon
                                    icon={heartSolid} className="cursor-pointer"
                                    onClick={handleRemoveProductFromWishList}
                                />
                                <h2 className={'uppercase'}>
                                    Save to wishList
                                </h2>
                            </Flex>
                        </Dialog.Title>
                        <Dialog.Description className="DialogDescription">
                            <img src="/not-login-image.avif" alt="not-login-image"/>
                            <div className={'wishlist-content'}>
                                <div className={'mt-6 description-detail'}>
                                    <p className={'text-center'}>
                                        Ever wish you could save all your fave fits & accessories in one place to come
                                        back
                                        to later? Almost like a ✨ wishlist ✨.
                                    </p>
                                </div>
                                <Grid columns="2" className={'wishlist'}>
                                    <Button className={'register-button'}  onClick={()=> {window.location = '/register'}}>
                                        CREATE ACCOUNT
                                    </Button>
                                    <Button className={'login-button'} onClick={()=> {window.location = '/login'}}>
                                        LOG IN
                                    </Button>
                                </Grid>
                            </div>
                        </Dialog.Description>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    )
}

export default LoveItem;