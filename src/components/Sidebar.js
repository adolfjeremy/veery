import React from "react";
import { FiBarChart2 } from "react-icons/fi";
import PropTypes from "prop-types";
import LeaderboardItem, { leaderboardShape } from "./LeaderboardItem";

function Sidebar({ leaderboards }) {
    return (
        <aside>
            <div className="leaderboard">
                <div className="leaderboard-heading">
                    <FiBarChart2 />
                    <h2>Leaderboard</h2>
                </div>
                <div className="leaderboard-list">
                    {leaderboards.map((data) => (
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        <LeaderboardItem key={data.user.id} {...data} />
                    ))}
                </div>
            </div>
        </aside>
    );
}

Sidebar.propTypes = {
    leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardShape)),
};

export default Sidebar;
