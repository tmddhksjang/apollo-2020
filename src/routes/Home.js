
import React from "react";
import { gql, useQuery } from "@apollo/client"

const GET_MOVIES = gql`{
    movies{
      id
        medium_cover_image
    }
  }`;

const FN = () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
    console.log(loading, error, data);
    return <h1>우리자기사랑해</h1>
};

export default FN;