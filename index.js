function createCard(pokemon) {
    const liEl = document.createElement('li')
    liEl.setAttribute('class', 'card')

    const pokemonImgEl = document.createElement('img')
    pokemonImgEl.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`)

    const pokemonNameEl = document.createElement('h2')
    pokemonNameEl.textContent = pokemon.name

    const pokemonHp = document.createElement('p')
    pokemonHp.textContent = `HP: ${pokemon.stats[0].base_stat}`
    
    const pokemonAttack = document.createElement('p')
    pokemonAttack.textContent = `ATTACK: ${pokemon.stats[1].base_stat}`

    const pokemonDefense = document.createElement('p')
    pokemonDefense.textContent = `Defense: ${pokemon.stats[2].base_stat}`

    const pokemonSpecialAttack = document.createElement('p')
    pokemonSpecialAttack.textContent = `SPECIAL ATTACK: ${pokemon.stats[3].base_stat}`

    const pokemonSpecialDefense = document.createElement('p')
    pokemonSpecialDefense.textContent = `SPECIAL DEFENSE: ${pokemon.stats[4].base_stat}`

    const pokemonSpeed = document.createElement('p')
    pokemonSpeed.textContent = `SPEED: ${pokemon.stats[5].base_stat}`

    liEl.append(pokemonImgEl, pokemonNameEl, pokemonHp, pokemonAttack, pokemonDefense, 
        pokemonSpecialAttack, pokemonSpecialDefense, pokemonSpeed)

    const listEl = document.querySelector('.cards')
    listEl.append(liEl)
}

function createCards(){
    for(const pokemon of data) {
        createCard(pokemon)
    }
}

createCards()