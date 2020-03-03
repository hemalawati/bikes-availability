import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li:hover {
    background: ${props => props.theme.hoverBackground};
  }

  li.active {
    background: ${props => props.theme.selectedBackground};
  }

  img {
    cursor: pointer;
  }
`;

const Countries = country => {
  return (
    <List>
      <li
        className={`${
          country.selectedCountry === country.country.id ? "active" : ""
        }`}
      >
        <img
          src={`https://www.countryflags.io/${country.country.id}/shiny/48.png`}
          onClick={() => country.handleChange(country.country)}
          alt={`${country.country.name} Flag`}
        />
      </li>
    </List>
  );
};

export default Countries;
