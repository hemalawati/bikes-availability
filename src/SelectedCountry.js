import React from "react";

const SelectedCountry = countrySelected => {
  return (
    <img
      src={`https://www.countryflags.io/${countrySelected.countrySelected.id}/shiny/48.png`}
      alt={`${countrySelected.countrySelected.name} Flag`}
    />
  );
};

export default SelectedCountry;
