import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PokeContext from "../../context/Pokemon/PokeContext";

const Favorite = () => {
  const { favorites } = useContext(PokeContext);

  return (
    <div className="favorites container">
      <div className="row">
        {favorites.length === 0  ? (
          <>
          <h1 className="favorite-title text-center"> YOUR POKEBASE IS EMPTY</h1>
          <Link className="nav-link favorite-link" to='/'><span>GO CATCH POKEMON</span></Link>
          </>
        ) : (
          favorites.map((pokemon) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 my-2"
              key={pokemon.id}
            >
              <div className="card favorite-card">
                <div className="favorite-poke">
                  <div className="favorite-img">
                    <img
                      src={pokemon.sprites.front_default}
                      alt="poke Favorite"
                    />
                  </div>
                </div>
                <h5 className="text-center">{pokemon.name}</h5>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorite;
