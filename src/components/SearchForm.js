import styled from "styled-components";

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
  }
`;

function SearchForm() {
  return (
    <StyledSearchForm>
      <input className="keyword" type="text" id="keyword" name="keyword" />
      <button type="button">Search</button>
    </StyledSearchForm>
  );
}

export default SearchForm;
