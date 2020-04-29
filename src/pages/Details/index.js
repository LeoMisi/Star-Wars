import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { doGet } from "../../Helpers/ApiHelper";

const Details = () => {
  const [person, setPerson] = useState([null]);
  const { id } = useParams();

  useEffect(() => {
    doGet(`/people/${id}`).then(setPerson);
  }, [id]);

  if (!person) {
    return <h1> Loading...</h1>;
  }

  console.log("*** Details.id", id);
  return <h1>{person.name}</h1>;
};

export default Details;
