import React, { useContext } from "react";
import PokeContext from "../context/Pokemon/PokeContext";

const Favorite = () => {
  const { favorites } = useContext(PokeContext);

  return (
    <div className="favorites container">
      <div className="row">
        {favorites.map((pokemon) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2" key={pokemon.id}>
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
        ))}
      </div>
    </div>
  );
};

export default Favorite;
