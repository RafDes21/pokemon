import React from "react";

const PokemonUbicado = ({ pokeElegido }) => {
  return (
    <div>
      {pokeElegido ? (
        <div className="card" style={{width:"13rem", margin:"50px auto"}}>
          <img src={pokeElegido.sprites.front_default} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{pokeElegido.name.toUpperCase()}</h5>
            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      ) : (
        <h1>pokemon no encontrado</h1>
      )}
    </div>
  );
};

export default PokemonUbicado;
           
