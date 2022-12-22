import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="not-found-page">
            <div className="not-found-page__container">
                <h1>404</h1>
                <p>we&apos;re unable to find that page</p>
                <Link to="/">back to home</Link>
            </div>
        </div>
    );
}

export default NotFoundPage;
