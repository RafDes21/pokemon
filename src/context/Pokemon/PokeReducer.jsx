import { GET_POKEMONS, GET_POKEMON, GET_FAVORITES } from "../type";

const PokeReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: payload,
      };
    case GET_POKEMON:
      return {
        ...state,
        selectPokemon: payload,
      };
      case GET_FAVORITES:
        return {
          ...state,
          favorites: payload,
        };

    default:
      break;
  }
};

export default PokeReducer;
