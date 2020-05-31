import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Country from "./country";
import { useSelector, useDispatch } from "react-redux";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background: var(--background);
  justify-content: center;
  border: 1px solid blue;
  padding: 4em 2em;
`;

function CountryList() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const countryListByName = useSelector(state => state.countryListByName);

  const countryList = useSelector(state => {
    if ("" !== state.filterByRegion) {
      return state.countryFilteredByRegion;
    }

    if (countryListByName.length > 0) {
      return countryListByName;
    }

    return state.countryList;
  });

  //const [countryList, setCountryList] = useState([])
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => {
        return response.json();
      })
      .then(list => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: list
        });

        console.log(list.length);
      })
      .catch(err => {
        console.log(err);
      });
  }, [dispatch]);

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
    <CountryListStyled>
      <input type="text" value={inputValue} onChange={filterByName} />
      {inputValue && <button onClick={clearInput}>X</button>}

      {countryListByName.length === 0 && inputValue && (
        <p>
          <strong>{inputValue}</strong>Not Found in countries
        </p>
      )}

      {countryList.map(({ name, flag, population, region, capital }) => {
        return (
          <Country
            key={name}
            name={name}
            flag={flag}
            population={population}
            region={region}
            capital={capital ? capital : "N/A"}
          />
        );
      })}
    </CountryListStyled>
  );
}

export default CountryList;
