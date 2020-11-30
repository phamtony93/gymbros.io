import React from "react";
import "./Feed.css";
import { useQuery, gql } from "@apollo/client";
import Listing from "../Listing/Listing";

const LISTINGS_QUERY = gql`
  query {
    listings {
      id
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
  if (error) return <p>Error: Data Not Retrieved</p>;
  console.log(data);
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
              id={id}
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
