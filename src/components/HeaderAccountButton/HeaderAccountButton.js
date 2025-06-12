import { ChevronDownIcon, PersonIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import {clearAllLocalStorage, getAccessToken} from "../../commons/method.common";
import { faUser as userRegular } from "@fortawesome/free-regular-svg-icons";
import { faUser as userSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { Button } from "@radix-ui/themes";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "./HeaderAccountButton.css";

const HeaderAccountButton = () => {
    const [accountData, setAccountData] = useState(undefined);
    const navigate = useNavigate();
    const url = window.location;

    useEffect(() => {
        const accessToken = getAccessToken();
        if (accessToken) {
            try {
                const decodedData = jwtDecode(accessToken);
                setAccountData(decodedData);
            } catch (error) {
                console.error("Error decoding token:", error);
            }
        }
    }, [url]);

    const handleLogOut = () => {
        clearAllLocalStorage();
        setAccountData(undefined);
        window.location.reload();
    }

    return (
        <>
            {accountData ? (
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <div className="account-button-trigger flex gap-1">
                            <FontAwesomeIcon icon={userSolid} className="account-icon" />
                            <ChevronDownIcon className="account-arrow" />
                        </div>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                        <DropdownMenu.Content className="account-dropdown-content" sideOffset={5}>
                            <div className="account-dropdown-scroll">
                                <DropdownMenu.Item className="account-dropdown-item">
                                    <Button onClick={()=>{navigate('/my-reservation')}}>My reservation</Button>
                                </DropdownMenu.Item>
                                <DropdownMenu.Separator className="account-dropdown-separator" />
                                <DropdownMenu.Item className="account-dropdown-item">
                                    <Button onClick={handleLogOut}>Log out</Button>
                                </DropdownMenu.Item>
                            </div>
                            <DropdownMenu.Arrow className="account-dropdown-arrow" />
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            ) : (
                <FontAwesomeIcon
                    icon={userRegular}
                    className="account-icon account-icon-unauthenticated"
                    onClick={() => navigate("/login")}
                />
            )}
        </>
    );
};

export default HeaderAccountButton;