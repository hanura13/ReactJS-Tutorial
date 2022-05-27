import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import Home from './container/Home/Home';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Home />,
  </React.StrictMode>
  
  //document.getElementById('root')
);

//ServiceWorker.unregister();