import React from 'react';
import App from './App.js';
import Wrapper from './components/language-wrapper/Wrapper'
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <Wrapper>
        <App tab="home" />
    </Wrapper>
);