

import './fonts.css';
import $ from 'jquery';

const body = $('body');

const p = $("<p></p>").text("Texto no paragrafo").css("color", "red");

body.append(p);