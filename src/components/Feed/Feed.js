import React from "react";
import "./Feed.css";
import { useQuery, gql } from "@apollo/client";

const LISTINGS_QUERY = gql`
  query {
    listings {
      hostName
      city
      gymPhotos
    }
  }
`;

function Feed() {
  const { loading, error, data } = useQuery(LISTINGS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: (</p>;
  return data.listings.map(({ hostName, city, gymPhotos }) => (
    <div key={hostName}>
      <ul>
        <li>{hostName}</li>
        <li>{city}</li>
        <li>{gymPhotos}</li>
      </ul>
    </div>
  ));
}

export default Feed;
