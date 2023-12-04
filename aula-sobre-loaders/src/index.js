import Title from './components/title/title';
import Image from './components/image';
import Button from './components/button/button';
import Warning from './templates/warning.html';
import './templates/warning.css';
import PhraseTxt from './files/file.txt';
import DescriptionJson from './files/description.json';

const title = new Title();

title.create("Teste do titulo");

const image = new Image();

image.insertImage();

const button = new Button();

button.create();

const body = document.querySelector('body');
body.innerHTML += PhraseTxt;
body.innerHTML += Warning;
body.innerHTML += DescriptionJson;

