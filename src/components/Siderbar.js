import React from "react";
import { FiBarChart2 } from "react-icons/fi";
import LeaderboardItem from "./LeaderboardItem";

function Siderbar() {
    return (
        <aside>
            <div className="leaderboard">
                <div className="leaderboard-heading">
                    <FiBarChart2 />
                    <h2>Leaderboard</h2>
                </div>
                <div className="leaderboard-list">
                    <LeaderboardItem />
                    <LeaderboardItem />
                    <LeaderboardItem />
                    <LeaderboardItem />
                    <LeaderboardItem />
                    <LeaderboardItem />
                    <LeaderboardItem />
                    <LeaderboardItem />
                    <LeaderboardItem />
                    <LeaderboardItem />
                </div>
            </div>
        </aside>
    );
}

export default Siderbar;
