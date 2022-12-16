import React from "react";
import PropTypes from "prop-types";

function MainContent({ children }) {
    return <article>{children}</article>;
}

MainContent.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.any,
};

export default MainContent;
