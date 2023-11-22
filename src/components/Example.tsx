import React from "react";
import useFilms from "../hooks/useFilms";
import usePeople from "../hooks/usePeoples";
import useSpecies from "../hooks/useSpecies";

const Example = () => {
  const { data } = useSpecies();

  return (
    <div>
      {data?.results.map((f, index) => (
        <li key={index}>{f.name}</li>
      ))}
    </div>
  );
};

export default Example;
