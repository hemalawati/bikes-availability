import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { getCountries } from "./services/countries.service";
import { getNetworkDetails } from "./services/networks.service";
import City from "./City";
import Countries from "./Countries";
import SelectedCountry from "./SelectedCountry";
import "./App.css";

const Container = styled.div`
  border: solid 1px ${props => props.theme.containerBorder};
  display: grid;
  grid-template-columns: 5% 95%;
`;

const Header = styled.header`
  background: ${props => props.theme.headerBackground};
  text-align: ${props => props.theme.centerTextAlign};
  grid-area: 1 / 2 / 2 / 3;
`;

const SideBar = styled.nav`
  background: ${props => props.theme.sideBarBackground};
  text-align: ${props => props.theme.centerTextAlign};
  grid-area: 1 / 1 / 11 / 2;
`;

const Content = styled.section`
  background: ${props => props.theme.contentBackground};
  text-align: center;
  overflow: auto;
  height: 850px;
  grid-area: 2 / 2 / 11 / 3;

  .noData {
    margin: 10%;
    font-size: 20px;
  }
`;

const App = () => {
  const [country, setCountry] = useState(getCountries()[0]);
  const [networkDetails, setNetworkDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getNetworkDetails(country.id).then(result => {
      setNetworkDetails(result);
      setIsLoading(false);
    });
  }, [country.id]);

  const handleChange = country => {
    setCountry(country);
    setIsLoading(true);
  };

  return (
    <Container>
      <Header>
        <SelectedCountry countrySelected={country} />
      </Header>
      <SideBar>
        {getCountries().map(c => (
          <Countries
            key={c.id}
            country={c}
            selectedCountry={country.id}
            handleChange={handleChange}
          />
        ))}
      </SideBar>
      <Content>
        {isLoading ? (
          <div className="loading-icon">
            <Icon loading size="big" name="spinner" />
          </div>
        ) : networkDetails.length > 0 ? (
          networkDetails.map(networkDetail => (
            <City key={networkDetail.id} networkDetail={networkDetail} />
          ))
        ) : (
          <p className="noData">
            <strong>No Data Found</strong>
          </p>
        )}
      </Content>
    </Container>
  );
};

export default App;
