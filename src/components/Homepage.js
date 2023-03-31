import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      console.log(res.data.results);
      setCharacters(res.data.results);
    });
    // .catch((err) => console.log(err));
  }, []);
  return (
    <main>
      <h1>Homepage here</h1>
      {characters.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <Link to={`CharacterDetails/${item.id}`} />
        </div>
      ))}
    </main>
  );
}
