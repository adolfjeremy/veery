import React from "react";
import PropTypes from "prop-types";

function Avatar({ image }) {
    return <img src={image} alt="avatar" className="avatar" />;
}

Avatar.propTypes = {
    image: PropTypes.string,
};

export default Avatar;
