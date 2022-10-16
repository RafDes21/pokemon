import React, { useReducer } from "react";
import PokeContext from "./PokeContext";
import PokeReducer from "./PokeReducer";
import axios from "axios";

const PokeState = ({ children }) => {
  const initialState = {
    pokemons: [],
    selectPokemon: null,
    favorites: [],
  };

  const [state, dispatch] = useReducer(PokeReducer, initialState);

  const getPokemons = async () => {
    let array = [];
    if (state.pokemons.length === 0) {
      for (let index = 1; index < 100; index++) {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${index}`
        );
        array.push(res.data);
      }
      dispatch({
        type: "GET_POKEMONS",
        payload: array,
      });
    }
  };
  const getPokemon = async (id) => {
    if (id > 0) {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      dispatch({
        type: "GET_POKEMON",
        payload: res.data,
      });
    } else {
      dispatch({
        type: "GET_POKEMON",
        payload: "",
      });
    }
  };

  const getFavorite = (id) => {
    const newArray = state.pokemons;
    const pokeFavorite = newArray.find((pokemon) => pokemon.id === id);

    if (pokeFavorite.is_default === true) {
      favorites(pokeFavorite);
      pokeFavorite.is_default = false;
      const updateArray = newArray;
      dispatch({
        type: "GET_POKEMONS",
        payload: updateArray,
      });
    } else {
      pokeFavorite.is_default = true;
      delteFavorites(pokeFavorite);
      const updateArray = newArray;
      dispatch({
        type: "GET_POKEMONS",
        payload: updateArray,
      });
    }
  };
  const favorites = (obj) => {
    let array = [...state.favorites, obj];

    dispatch({
      type: "GET_FAVORITES",
      payload: array,
    });
  };
  const delteFavorites = (obj) => {
    const newFavorites = [...state.favorites];
    const indice = newFavorites.indexOf(obj);
    newFavorites.splice(indice, 1);

    dispatch({
      type: "GET_FAVORITES",
      payload: newFavorites,
    });
  };

  return (
    <PokeContext.Provider
      value={{
        pokemons: state.pokemons,
        favorites: state.favorites,
        selectPokemon: state.selectPokemon,
        getPokemons,
        getFavorite,
        getPokemon,
        delteFavorites
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export default PokeState;
