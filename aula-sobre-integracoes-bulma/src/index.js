

import './index.scss';

import $ from 'jquery';

import 'bootstrap';

const body = $('body');

const h1 = $("<h1></h1>").text("Meu titulo com icone").css("color", "blue");

body.append(h1);

const p = $("<p></p>").text("Texto no paragrafo").css("color", "red");

body.append(p);
