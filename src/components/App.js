// React
import React from 'react';

// Components
import Header from './Header';
import Layout from './Layout';

class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Layout />
            </div>
        );
    }
}

export default App;
