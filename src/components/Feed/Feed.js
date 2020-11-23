import React from "react";
import "./Feed.css";
import { useQuery, gql } from "@apollo/client";
import Listing from "../Listing/Listing";

const LISTINGS_QUERY = gql`
  query {
    listings {
      hostName
      city
      gymPhotos
      perDayPrice
      perMonthPrice
      description
      geocode {
        longitude
        latitude
      }
    }
  }
`;

function Feed() {
  const { loading, error, data } = useQuery(LISTINGS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: (</p>;
  return (
    <div className="feed">
      {" "}
      {data.listings.map(
        ({
          id,
          hostName,
          city,
          gymPhotos,
          perDayPrice,
          perMonthPrice,
          description,
          geocode,
        }) => (
          <div key={id}>
            <Listing
              hostName={hostName}
              city={city}
              gymPhotos={gymPhotos}
              perDayPrice={perDayPrice}
              perMonthPrice={perMonthPrice}
              description={description}
              geocode={geocode}
            />
            <hr></hr>
          </div>
        )
      )}{" "}
    </div>
  );
}

export default Feed;
