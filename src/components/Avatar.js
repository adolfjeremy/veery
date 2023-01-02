import React from "react";
import PropTypes from "prop-types";
import ProfilPicture from "./styled/ProfilePicture";

function Avatar({ image, type }) {
    return <ProfilPicture src={image} alt="avatar" type={type} />;
}

Avatar.propTypes = {
    image: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["sm", "md"]).isRequired,
};

export default Avatar;
