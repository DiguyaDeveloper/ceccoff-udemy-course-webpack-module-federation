import print from './msg';

if (module.hot) {
    module.hot.accept('./msg.js', function () {
        console.log('O módulo de msg atualizou');
        print();
    });
}