

import './fonts.css';
import $ from 'jquery';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faBacon } from '@fortawesome/free-solid-svg-icons';

library.add(faBacon);
dom.watch();

const body = $('body');

const h1 = $("<h1></h1>").text("Meu titulo com icone").css("color", "blue");
const icon = $("<i class='fas fa-bacon'></i>");

body.append(h1);
body.append(icon);

const p = $("<p></p>").text("Texto no paragrafo").css("color", "red");

body.append(p);