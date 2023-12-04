export default class Button {
    create() {
        const button = document.createElement('button');

        button.text = 'Clique em mim!';

        button.classList('btn');

        document.querySelector('body').appendChild(button);
    }
}