

import './assets/styles/styles.scss';

import $ from 'jquery';

const body = $('body');

const h1 = $("<h1></h1>").text("Meu titulo com icone").addClass("title");
const p = $("<p></p>").text("Texto no paragrafo").addClass("subtitle");
const button = $("<button></button>").text("Botão").addClass("button is-primary");
const link = $("<button></button>").text("Link").addClass("button is-link");

body.append(h1);
body.append(p);
body.append(button);
body.append(link);
