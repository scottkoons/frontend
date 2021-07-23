import React from 'react';
import { Jumbotron } from 'reactstrap';

function Home({ username }) {
    return (
        <div>
            <Jumbotron>
                {username ?
                    <>
                        <h1 className='display-4'>Hello {username}, welcome back to Jobly!</h1>
                        <p className='lead'>Find your dream job!! (seriously, you won't find anything here)</p>
                    </>
                    :
                    <>
                        <h1 className='display-4'>Hello, welcome to Jobly!</h1>
                        <p className='lead'>This is the best jobsite on the web!! (no, not really)
                        </p>
                    </>
                }
            </Jumbotron>
        </div>
    );
};

export default Home;