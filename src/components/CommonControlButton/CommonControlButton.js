import {PauseIcon, PlayIcon} from "@radix-ui/react-icons";
import {Box} from "@radix-ui/themes";
import React from "react";

export default function CommonControlButton({pause, togglePause, className}) {
    return (
        <Box className={`${className}`} onClick={togglePause}>
            {pause ? (
                <PlayIcon
                    color={"black"}
                    fontSize="medium"
                    fontWeight="bold"
                />
            ) : (
                <PauseIcon
                    color={"black"}
                    fontSize="medium"
                    fontWeight="bold"
                />
            )}
        </Box>
    );
}