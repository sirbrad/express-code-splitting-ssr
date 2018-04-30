import React from "react";
import Loadable from 'react-loadable';

const LoadableBar = Loadable({
  loader: () => import('./Bar'),
  loading() {
    return <div>Loading...</div>
  }
});

const App = () => {
  return (
    <div>
      <div>I am a real app, yay</div>
      <LoadableBar />
    </div>
  )
}

export default App;
