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
    }
  }
`;

function Feed() {
  const { loading, error, data } = useQuery(LISTINGS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: (</p>;
  return data.listings.map(({ id, hostName, city, gymPhotos }) => (
    <div key={id}>
      <Listing hostName={hostName} city={city} gymPhotos={gymPhotos} />
    </div>
  ));
}

export default Feed;
