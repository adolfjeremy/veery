import React from "react";
import { useSearchParams } from "react-router-dom";
// import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";

function SearchBar() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("query") || "";
    const handleKeywordChange = (e) => {
        setSearchParams({ query: e.target.value });
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
