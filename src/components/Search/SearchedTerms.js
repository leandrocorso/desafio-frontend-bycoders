import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function SearchedTerms({ className, keyword }) {
  const [termsList, setTermsList] = useState([]);
  const [termsFound, setTermsFound] = useState([]);

  useEffect(() => {
    const searchedTerms = localStorage.getItem("searchedTerms");
    const terms = searchedTerms ? JSON.parse(searchedTerms) : [];
    setTermsList(terms);
  }, []);

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
