import React from "react";
import ReactDOM from "react-dom";
import Loadable from 'react-loadable';
import App from "./App";

Loadable.preloadReady().then(() => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});
