import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Input from "./input";

const SearchStyled = styled.div`
  display: flex;
`;

function Search() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const filterByName = e => {
    setInputValue(e.target.value);
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: e.target.value
    });
  };

  const clearInput = () => {
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: ""
    });
    setInputValue("");
  };

  return (
    <SearchStyled>
      {inputValue && <button onClick={clearInput}>X</button>}
      <Input
        placeholder="Search for a country..."
        value={inputValue}
        onChange={filterByName}
      />
    </SearchStyled>
  );
}

export default Search;
