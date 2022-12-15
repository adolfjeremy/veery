import React from "react";
import PropTypes from "prop-types";

function VoteButton({ children, handleOnClick }) {
    return (
        <button type="button" onClick={handleOnClick}>
            {children}
        </button>
    );
}

VoteButton.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.any,
    handleOnClick: PropTypes.func.isRequired,
};

export default VoteButton;
