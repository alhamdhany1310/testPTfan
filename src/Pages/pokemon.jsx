import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import ListPoke from './ListPoke';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [userSelect, setUserSelect] = useState('');

  const getPokemon = async () => {
    const datas = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const value = await datas.json();
    const result = value.results.map((data) => {
      return {
        label: data.name,
        value: data.name,
      };
    });
    setPokemon(result);
  };
  useEffect(() => {
    getPokemon();
  });

  const handleChange = (value) => {
    setUserSelect(value);
  };
  return (
    <div className="container pt-4">
      <Select options={pokemon} onChange={(e) => handleChange(e.value)} />
      <div className="card">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{userSelect}</h5>
          <a href="www" className="btn btn-primary">
            Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
