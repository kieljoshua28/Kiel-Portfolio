function FloatingPokemons() {
  const pokemons = [
    // LEFT SIDE
    { id: 25, x: '8%', y: '1%', delay: '0s' },
    { id: 6, x: '3%', y: '30%', delay: '1s' },
    { id: 9, x: '1%', y: '50%', delay: '2s' },
    { id: 3, x: '4%', y: '70%', delay: '1.5s' },
    { id: 149, x: '2%', y: '85%', delay: '2.5s' },
    { id: 39, x: '5%', y: '20%', delay: '0.5s' },
    { id: 54, x: '3%', y: '60%', delay: '3s' },
    { id: 133, x: '4%', y: '40%', delay: '1.2s' },

    // RIGHT SIDE
    { id: 143, x: '92%', y: '15%', delay: '2.8s' },
    { id: 147, x: '94%', y: '35%', delay: '0.8s' },
    { id: 120, x: '93%', y: '55%', delay: '1.8s' },
    { id: 66, x: '95%', y: '72%', delay: '2.3s' },
    { id: 92, x: '91%', y: '25%', delay: '0.3s' },
    { id: 16, x: '96%', y: '65%', delay: '1.6s' },
    { id: 63, x: '92%', y: '80%', delay: '2.1s' },
  ]

  return (
    <div className="floating-pokemons">
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.id}
          className="pokemon"
          style={{
            left: pokemon.x,
            top: pokemon.y,
            animationDelay: pokemon.delay,
          }}
        >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt="pokemon"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}

export default FloatingPokemons