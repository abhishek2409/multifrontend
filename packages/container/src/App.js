import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';

const genClassName = createGenerateClassName({
  productionPrefix: "container_",
});

const App = () => {
    return (
      <BrowserRouter>
        <StylesProvider generateClassName={genClassName}>
          <div>
            <Header />
            <MarketingApp />
          </div>
        </StylesProvider>
      </BrowserRouter>
    );
}

export default App
