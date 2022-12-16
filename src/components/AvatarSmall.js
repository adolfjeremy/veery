import React from "react";
import PropTypes from "prop-types";

function AvatarSmall({ image }) {
    return <img src={image} alt="avatar" className="avatar-sm" />;
}

AvatarSmall.propTypes = {
    image: PropTypes.string,
};

export default AvatarSmall;
