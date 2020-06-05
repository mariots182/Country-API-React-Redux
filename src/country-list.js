import React, { useEffect } from "react";
import styled from "styled-components";
import Country from "./country";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "./wrapper";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  grid-auto-flow: columns;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minMax(0, 270px));
  grid-column-gap: 66px;
  background: var(--background);
  justify-content: center;
  padding: 3em 0;
`;

function CountryList() {
  const dispatch = useDispatch();
  const countryListByName = useSelector((state) => state.countryListByName);
  const countryList = useSelector((state) => {
    if (state.filterByRegion !== "" && countryListByName.length === 0) {
      return state.countryFilteredByRegion;
    }

    if (countryListByName.length > 0) {
      return countryListByName;
    }

    return state.countryList;
  });

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: list,
        });

        console.log(list.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <Wrapper>
      <CountryListStyled>
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
    </Wrapper>
  );
}

export default CountryList;
