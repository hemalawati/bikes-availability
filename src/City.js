import React from "react";
import styled from "styled-components";
import Bikes from "./Bikes";

const SubContent = styled.article`
  background: ${props => props.theme.subContentBackground};
  border-radius: 5px;
  box-shadow: 2px 2px 10px 2px ${props => props.theme.boxShadow};
  color: ${props => props.theme.text};
  margin: 2%;
  padding: 1%;

  .companies {
    text-align: left;
    margin-top: 1%;
  }
`;

const City = networkDetail => {
  return (
    <SubContent>
      <h3>{networkDetail.networkDetail.location.city}</h3>
      <Bikes stations={networkDetail.networkDetail.stations} />
      {networkDetail.networkDetail.company.map(c => (
        <p className="companies" key={c}>
          {c}
        </p>
      ))}
    </SubContent>
  );
};

export default City;
