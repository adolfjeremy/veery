import React from "react";
import Avatar from "./Avatar";

function LeaderboardItem() {
    return (
        <div className="leaderboard-item">
            <div className="leaderboard-item__user-info">
                <Avatar image="https://ui-avatars.com/api/?name=Elon%20musk&background=random" />
                <h3>Elon Musk</h3>
            </div>
            <p>470</p>
        </div>
    );
}

export default LeaderboardItem;
