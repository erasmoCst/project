import React, { useState } from "react";
import { Button, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

interface interfaceButton {
    title: string;
    to: string;
    status: boolean;
    changeStatus: any;
}

export const FullSizeButton = (props: interfaceButton) => {
    /* const [status, setStatus] = useState(false); */
    
    return (
        <>
            {/* <Link to={props.to}> */}
                {/* <ToggleButtonGroup type="checkbox"> */}
                    <ToggleButton
                        id="toggle-check"
                        type="checkbox"
                        value="1"
                        variant="outline-primary"
                        size="lg"
                        style={{
                            fontWeight: "bold",
                            width: "100%",
                            backgroundColor: "#0F4C81",
                            margin: "20px 0px 20px 0px",
                        }}
                        onChange={props.changeStatus}
                        checked={props.status}
                    >
                        {props.title}
                    </ToggleButton>{" "}
                {/* </ToggleButtonGroup> */}
            {/* </Link> */}
        </>
    );
};
