import './card.scss';
import { createCardHeader } from './cardHeader';
import { createElement } from '../../lib/dom';

export function createCard() {
  const pokemon = createElement('article', { className: 'card' });
  pokemon.appendChild(createCardHeader(11, 'Metapod'));
  return pokemon;
}
