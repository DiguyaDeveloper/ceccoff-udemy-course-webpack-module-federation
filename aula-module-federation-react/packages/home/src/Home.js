import React from 'react';

import { Button } from 'reactstrap';

const Home = () => {
    return (
        <div>
            <h1 className='display-3'>Olá Module Federation</h1>
            <hr className='my-2' />
            <p>Este comente é de outro APP!</p>
            <p className='lead'>
                <Button color='primary'>Botão</Button>
            </p>
        </div>
    );
};

export default Home;