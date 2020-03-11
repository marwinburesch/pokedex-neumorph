import './index.scss';
import { createCard } from './components/card/card';
import { createElement } from './lib/dom';

const main = createElement('main', {});
main.appendChild(createCard());

const font = createElement('link', {
  href:
    'https://fonts.googleapis.com/css?family=Cabin|Raleway:200,400,700,900&display=swap',
  rel: 'stylesheet'
});

document.head.appendChild(font);
document.body.appendChild(main);
