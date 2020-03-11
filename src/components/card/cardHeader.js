import './cardHeader.scss';
import { createElement } from '../../lib/dom';

export function createCardHeader(pokemonId, pokemonName) {
  const pokemonIdWithZeroes = ('00' + pokemonId).slice(-3);
  const imageSrc = `https://github.com/marwinburesch/pokemon.json/blob/master/images/${pokemonIdWithZeroes}.png?raw=true`;
  const header = createElement('header', { className: 'card-header' });

  const title = createElement('div', { className: 'card-header-title' });
  const image = createElement('img', {
    className: 'card-header-image',
    src: imageSrc,
    alt: `pokemon #${pokemonId}`
  });

  const titlePokemonId = createElement('h2', {
    innerText: `#${pokemonIdWithZeroes}`
  });
  const titlePokemon = createElement('h1', {
    innerText: pokemonName.toUpperCase()
  });

  title.appendChild(titlePokemonId);
  title.appendChild(titlePokemon);

  header.appendChild(title);
  header.appendChild(image);

  return header;
}
