import './card.scss';
import { createCardHeader } from './cardHeader';
import { createElement } from '../../lib/dom';

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
