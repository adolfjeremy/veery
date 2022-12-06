import React, { useState } from "react";
// import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";

function SearchBar() {
    const [keyword, setKeyword] = useState("");
    const handleKeywordChange = ({ target }) => {
        setKeyword(target.value);
    };
    return (
        <div className="searchbar">
            <FiSearch />
            <input
                name="keyword"
                id="keyword"
                value={keyword}
                onChange={handleKeywordChange}
                placeholder="Search for Thread"
                autoComplete="off"
            />
        </div>
    );
}

// SearchBar.propTypes = {
//     keyword: PropTypes.string,
//     handleKeywordChange: PropTypes.func.isRequired,
// };

export default SearchBar;
