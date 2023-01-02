import React from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";

function LeaderboardItem({ user, score }) {
    return (
        <div className="leaderboard-item">
            <div className="leaderboard-item__user-info">
                <Avatar image={user.avatar} type="md" />
                <h3>{user.name}</h3>
            </div>
            <p>{score}</p>
        </div>
    );
}

const userShape = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};
const leaderboardShape = {
    score: PropTypes.number.isRequired,
    user: PropTypes.shape(userShape).isRequired,
};

LeaderboardItem.propTypes = {
    ...leaderboardShape,
};

export { leaderboardShape };

export default LeaderboardItem;
