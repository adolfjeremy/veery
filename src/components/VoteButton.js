import React from "react";
import PropTypes from "prop-types";

function VoteButton({ children }) {
    return <button type="button">{children}</button>;
}

VoteButton.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.any,
};

export default VoteButton;
