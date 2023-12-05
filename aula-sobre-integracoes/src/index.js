

import './fonts.css';
import './index.scss';

import $ from 'jquery';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faBacon } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap';

library.add(faBacon);
dom.watch();

const body = $('body');

const h1 = $("<h1></h1>").text("Meu titulo com icone").css("color", "blue");
const h3 = $("<h3></h3>").text("Meu titulo Badge").addClass("badge bg-secondary");
const icon = $("<i class='fas fa-bacon'></i>");

body.append(h1);
body.append(h3);
body.append(icon);

const p = $("<p></p>").text("Texto no paragrafo").css("color", "red");

body.append(p);

const div = $("<div></div>").addClass("alert alert-primary").text("Cuidado com isso");

body.append(div);