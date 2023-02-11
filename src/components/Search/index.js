import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  clearKeyword,
  searchVideos,
  setSearchedTerms,
} from "../../redux/videoSlice";
import SearchedTerms from "./SearchedTerms";

function Search({ className }) {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");

  const saveKeywordToSearchedTerms = () => {
    const searchedTerms = localStorage.getItem("searchedTerms");
    const termsList = JSON.parse(searchedTerms) || [];
    if (termsList) {
      termsList.forEach((item, index) => {
        if (item === keyword) {
          termsList.splice(index, 1);
        }
      });
    }
    termsList.unshift(keyword);
    localStorage.setItem("searchedTerms", JSON.stringify(termsList));
    dispatch(setSearchedTerms(termsList));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    saveKeywordToSearchedTerms();
    dispatch(searchVideos(keyword));
    dispatch(clearKeyword(keyword));
    setKeyword("");
  };

  return (
    <div className={className}>
      <div className={`${className}__form`}>
        <input
          type="text"
          className={`${className}__form__keyword`}
          value={keyword}
          autoComplete="off"
          onChange={(e) => setKeyword(e.target.value)}
        />

        <button
          type="button"
          className={`${className}__form__button`}
          onClick={(e) => handleSearch(e)}
          disabled={keyword === ""}
        >
          Search
        </button>
      </div>
      <SearchedTerms className={`${className}__terms`} keyword={keyword} />
    </div>
  );
}

Search.propTypes = {
  className: PropTypes.string,
};

Search.defaultProps = {
  className: "search",
};

export default Search;
