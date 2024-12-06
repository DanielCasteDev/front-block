import React from 'react';
import BlockchainView from './components/BlockchainView';
import AddBlock from './components/AddBlock';
import VerifyChain from './components/VerifyChain';

const App = () => {
    return (
        <div style={{ padding: '20px' }}>
            <AddBlock />
            <VerifyChain />
            <BlockchainView />
        </div>
    );
};

export default App;
