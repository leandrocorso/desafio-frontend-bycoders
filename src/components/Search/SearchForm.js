import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { searchVideos } from "../../redux/videoSlice";

const StyledSearchForm = styled.div`
  grid-area: search-form;
  display: flex;

  .keyword {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.darkGray};
    height: 40px;
    padding: 0 10px;
  }

  button {
    background-color: ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.white};
    height: 40px;
    padding: 0 10px;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      background-color: ${({ theme: { colors } }) => colors.gray};
    }
  }
`;

function SearchForm() {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
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

  const saveKeywordToSearchedTerms = () => {
    termsList.forEach((item, index) => {
      if (item === keyword) {
        termsList.splice(index, 1);
      }
    });
    termsList.unshift(keyword);
    setTermsList(termsList);
    localStorage.setItem("searchedTerms", JSON.stringify(termsList));
  };

  const handleSearch = () => {
    saveKeywordToSearchedTerms();
    dispatch(searchVideos(keyword));
    setKeyword("");
  };

  return (
    <>
      <StyledSearchForm>
        <input
          className="keyword"
          type="text"
          id="keyword"
          name="keyword"
          value={keyword}
          autoComplete="off"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="button" onClick={handleSearch} disabled={keyword === ""}>
          Search
        </button>
      </StyledSearchForm>

      {keyword && (
        <div>
          <ul>
            {termsFound.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default SearchForm;
