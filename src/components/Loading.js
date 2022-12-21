import React from "react";
import LoadingBar from "react-redux-loading-bar";

function Loading() {
    return (
        <div className="loading">
            <LoadingBar style={{ backgroundColor: "#7856e1" }} />
        </div>
    );
}

export default Loading;
