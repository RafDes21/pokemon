import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PokeContext from "../../context/Pokemon/PokeContext";
import Video from "../../videos/pokemon.mp4";
import { Spinner } from "reactstrap";
import {AiOutlineCloseCircle} from "react-icons/ai"

const Pokemons = () => {
  const { pokemons, getPokemons, getFavorite, getPokemon, selectPokemon } =
    useContext(PokeContext);

  const detail = (id) => {
    getPokemon(id);
  };

  useEffect(() => {
    getPokemons();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container pokemons">
      <div className="row">
        {pokemons.length === 0 ? (
          <div className="video">
            <video autoPlay loop muted src={Video} />
            <h1>
              cargando <Spinner />
            </h1>
          </div>
        ) : (
          pokemons.map((pokemon, index) => (
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
                  <Link className="nav-link" onClick={() => detail(pokemon.id)}>
                    POKE DETAILS
                  </Link>

                  <div>
                    {pokemon.is_default ? (
                      <img
                        onClick={() => getFavorite(pokemon.id)}
                        className="favorite"
                        src="https://cutewallpaper.org/24/open-pokeball-png/pokemon-pokeball-nintendo-free-image-on-pixabay.png"
                        alt="pokebola"
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
          ))
        )}
      </div>
      <div>
        <div>
          {!selectPokemon ? (
            ""
          ) : (
            <div className="detail">
              <img src={selectPokemon.sprites.front_default} alt="imagen" />
              <div className="p-3">
                <h1>{selectPokemon.name}</h1>
                <h5>Peso: {selectPokemon.weight} gr.</h5>
                <h5>Altura: {selectPokemon.height}</h5>
                <h5>Habilidad: {selectPokemon.abilities[0].ability.name}</h5>
                <span onClick={() => detail(0)}><AiOutlineCloseCircle/></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pokemons;
