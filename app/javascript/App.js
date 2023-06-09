import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from "./components/Greeting";
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
     <Router>
        <Greeting />
      </Router>
    </Provider>
  );
}

export default App;