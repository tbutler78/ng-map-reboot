import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// Variables will not exist in bundle if not explicitly referenced in client code
console.log("AWS_SECRET_KEY:", process.env.AWS_SECRET_KEY);
console.log("AWS_ACCESS_KEY_ID:", process.env.AWS_ACCESS_KEY_ID);
ReactDOM.render(<App />, document.getElementById('root'));