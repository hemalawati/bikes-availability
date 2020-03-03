const getNetworks = async () => {
  const response = await fetch(
    `http://api.citybik.es/v2/networks?fields=id,location,name`
  );
  const networks = await response.json();

  return networks;
};

export const getNetworkDetails = async countryId => {
  let networkIdForCountry = [];
  let networkDetails = [];

  await getNetworks().then(result => {
    networkIdForCountry = result.networks
      .filter(network => network.location.country === countryId.toUpperCase())
      .map(network => network.id);
  });

  for (let id of networkIdForCountry) {
    const response = await fetch(
      `http://api.citybik.es/v2/networks/${id}?fields=id,stations,location,company`
    );
    const networkDetail = await response.json();
    networkDetails.push(networkDetail.network);
  }

  return networkDetails;
};
