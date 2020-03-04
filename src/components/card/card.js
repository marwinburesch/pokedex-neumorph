import './card.scss';
import { createCardHeader } from './cardHeader';
import { createElement } from '../../lib/dom';

// design: https://www.figma.com/file/fnDoJA2SQy2IK2Z5gEgGoB/pokedexv2?node-id=0%3A1
// meta, weaknesses, evolution: https://pokeapi.co/api/v2/pokemon/metapod/
// basestats, type: https://github.com/marwinburesch/pokemon.json/blob/master/db.json e.g. json-server
// images: https://github.com/marwinburesch/pokemon.json/blob/master/images/${POKEMONID}.png?raw=true
// flavortext: https://pokeapi.co/api/v2/pokemon-species/11/

const pokemon = {
  id: 11,
  name: 'Metapod',
  flavortext:
    'Its shell is filled with a thick liquid. All of the\ncells throughout its body are being rebuilt in\npreparation for evolution.'
};

export function createCard() {
  const card = createElement('article', { className: 'card' });
  card.appendChild(createCardHeader(pokemon.id, pokemon.name));
  return card;
}
