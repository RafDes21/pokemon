import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PokeContext from "../context/Pokemon/PokeContext";
import { MdCatchingPokemon } from "react-icons/md";

const Pokemons = () => {
  const { pokemons, getPokemons, getFavorite } = useContext(PokeContext);

  useEffect(() => {
    getPokemons();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container pokemons">
      <div className="row">
        {pokemons.map((pokemon, index) => (
          <div className="col-12 col-sm-6 col-md-6 col-lg-3" key={index}>
            <div className="card pokemon">
              <div className="card-header">
                <img
                  src={pokemon.sprites.front_default}
                  className="card-img-top img-pokemons"
                  alt="imagen"
                />
              </div>
              <div className="card-body">
                <h2 className="text-center">{pokemon.name}</h2>
                <h5>Peso: {pokemon.weight} gr.</h5>
                <h5>Altura: {pokemon.height}</h5>
                <h5>Habilidad: {pokemon.abilities[0].ability.name}</h5>
                <Link className="nav-link" to="/details">
                  add favorites
                </Link>
                <div>
                  {pokemon.is_default ? (
                    <MdCatchingPokemon
                      onClick={() => getFavorite(pokemon.id)}
                      className="favorite"
                    />
                  ) : (
                    <img
                      onClick={() => getFavorite(pokemon.id)}
                      className="pokebola"
                      src="https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-1.png"
                      alt="pokebola"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokemons;
