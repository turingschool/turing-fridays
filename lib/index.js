require('./styles/main');
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const Root = () => {
  return(
    <main>
      <App />
    </main>
  )
}

render(<Root/>, document.getElementById('app'));
