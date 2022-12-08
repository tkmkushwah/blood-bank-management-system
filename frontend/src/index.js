import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginHead from './components/LoginHead';
import LoginScreen from './screens/LoginScreen';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <LoginScreen />
  </React.StrictMode>
);
