import React from "react";

const Error = ({error}) => {
  if (!error) return null;
  return <p className={{ color: "#f31", margin: "1rem 0" }}>{error}</p>;
};

export default Error;
