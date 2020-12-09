import React from 'react';
import About from '../components/About';
import Main from '../components/Main';

const App = () => {
    return(
        <Main>
            <About
            avatar="https://pbs.twimg.com/profile_images/1307914394714529795/py2F_1X5_400x400.jpg"
            />
        </Main>
    );
}

export default App;