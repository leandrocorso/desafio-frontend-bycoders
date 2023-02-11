import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectSearchedTerms } from "../../redux/videoSlice";

function SearchedTerms({ className, keyword }) {
  const searchedTerms = useSelector(selectSearchedTerms);

  const [termsList, setTermsList] = useState([]);
  const [termsFound, setTermsFound] = useState([]);

  useEffect(() => {
    const localSearchedTerms = localStorage.getItem("searchedTerms");
    const terms = localSearchedTerms ? JSON.parse(localSearchedTerms) : [];
    setTermsList(terms);
  }, []);

  useEffect(() => {
    setTermsList(searchedTerms);
  }, [searchedTerms]);

  useEffect(() => {
    if (keyword) {
      const terms = termsList.filter((item) => item.includes(keyword));
      setTermsFound(terms);
    }
  }, [keyword]);

  return (
    keyword !== "" &&
    termsFound && (
      <div className={className}>
        <ul className={`${className}__list`}>
          {termsFound.map((item) => (
            <li key={item} className={`${className}__list__item`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  );
}

SearchedTerms.propTypes = {
  className: PropTypes.string,
  keyword: PropTypes.string.isRequired,
};

SearchedTerms.defaultProps = {
  className: "searched-terms",
};

export default SearchedTerms;
