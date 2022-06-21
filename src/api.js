 export async function pokemonUnico (pokemon){
  try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const respuesta = await fetch(url)
      const data = await respuesta.json()
      return data
  } catch (error) {
    console.log(error);
  }
}
       
     
    