import ClassImage from '../assets/images/aula-img.png';

export default class Image {

    insertImage() {
        const img = document.createElement('img');
        img.src = ClassImage;
        img.width = 200;

        document.querySelector('body').appendChild(img);
    }

}