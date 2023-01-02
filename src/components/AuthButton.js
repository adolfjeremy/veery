import React from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LinkButton from "./styled/LinkButton";

// eslint-disable-next-line object-curly-newline
function AuthButton({ destination, content, type }) {
    const backgroundColor = {
        purple: "#7856e1",
        white: "#ffffff",
    };
    const color = {
        purple: "#ffffff",
        white: "#000000",
    };
    return (
        <LinkButton
            backgroundColor={backgroundColor[type]}
            color={color[type]}
            to={destination}
        >
            {content}
        </LinkButton>
    );
}
AuthButton.propTypes = {
    /** The destination of the link */
    destination: PropTypes.string.isRequired,
    /** The content of the link */
    content: PropTypes.string.isRequired,
    /** Type of link, it will change the background color  */
    type: PropTypes.oneOf(["purple", "white"]),
};

export default AuthButton;
