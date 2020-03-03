import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import classNames from "classnames";

const BikesAvailability = styled.div`
  .lowAvailability {
    color: ${props => props.theme.lowAvailability};
  }

  .highAvailability {
    color: ${props => props.theme.highAvailability};
  }

  .freeBikesByEmptySlots {
    padding: 1%;
  }
`;

const AvailabilityPercentage = styled.div`
  margin: 2% 20%;

  .percentage {
    font-size: 40px;
    padding: 5%;
  }
`;

const Companies = styled.div`
  text-align: left;
`;

const Bikes = stations => {
  let freeBikes = stations.stations.reduce(
    (acc, cur) => acc + cur.free_bikes,
    0
  );
  let emptySlots = stations.stations.reduce(
    (acc, cur) => acc + cur.empty_slots,
    0
  );
  let availability = Number.isFinite(Math.floor((freeBikes / emptySlots) * 100))
    ? Math.floor((freeBikes / emptySlots) * 100)
    : 0;

  let availabilityClass =
    availability <= 25 ? "lowAvailability" : "highAvailability";

  return (
    <BikesAvailability>
      <AvailabilityPercentage>
        <strong>Availability: </strong>
        <Icon
          name={`${availability <= 25 ? "thumbs down" : "thumbs up"}`}
          color="yellow"
        />
        <span className={classNames(availabilityClass, "percentage")}>
          <strong>{availability}%</strong>
        </span>
      </AvailabilityPercentage>
      <Companies>
        <u>Companies:</u>
        <span
          className={classNames(availabilityClass, "freeBikesByEmptySlots")}
        >
          {freeBikes} / {emptySlots}
        </span>
      </Companies>
    </BikesAvailability>
  );
};

export default Bikes;
