import './cardText.scss';
import { createElement } from '../../lib/dom';

export function createCardText(text) {
  const paragraph = createElement('p', {
    className: 'card-text',
    innerText: text.replace(/\r\n|\n|\r/gm, ' ')
  });
  return paragraph;
}
