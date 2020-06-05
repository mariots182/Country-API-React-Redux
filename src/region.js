import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const RegionFilterStyled = styled.select`
  padding: 1em;
  border: none;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  outline: 0;
  border-radius: 5px;
  background: var(--white);
  color: var(--black);
`;

const filterByRegionAction = (regionSelected) => {
  return {
    type: "FILTER_BY_REGION",
    payload: { regionSelected },
  };
};

export const Region = () => {
  const dispatch = useDispatch();
  const filterByRegion = useSelector((state) => state.filterByRegion);

  const onRegionChange = (selectEvent) => {
    const value = selectEvent.target.value;

    dispatch(filterByRegionAction(value));
  };

  return (
    <RegionFilterStyled onChange={onRegionChange} value={filterByRegion}>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </RegionFilterStyled>
  );
};
