import React from 'react'
import Favorite from '../components/favorite/Favorite'
import "../components/favorite/favorites.css"

export const Favorites = () => {
  return (
    <div className='favorites'>
    <h1 className='text-center favorite-title'>WELCOME TO YOUR POKEBASE</h1>
      <Favorite/>
    </div>
  )
}
