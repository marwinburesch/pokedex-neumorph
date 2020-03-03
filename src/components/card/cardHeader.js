import { createElement } from '../../lib/dom';

export default function cardHeader(pokemonId, pokemonName) {
  const imageSrc = `https://github.com/fanzeyi/pokemon.json/blob/master/images/${pokemonId}.png`;
  const header = createElement('header', { className: 'card-header' });

  const title = createElement('title', { className: 'card-header-title' });
  const image = createElement('img', {
    className: 'card-header-image',
    src: imageSrc,
    alt: `pokemon #${pokemonId}`
  });

  const titlePokemonId = createElement('h2', {
    innerText: `#${pokemonId}`
  });
  const titlePokemon = createElement('h1', {
    innerText: pokemonName
  });

  title.appendChild(titlePokemonId);
  title.appendChild(titlePokemon);

  header.appendChild(title);
  header.appendChild(image);

  return header;
}
