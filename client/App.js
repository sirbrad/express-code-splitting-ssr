import React from "react";
import Loadable from 'react-loadable';

const LoadableBar = Loadable({
  loader: () => import('./Bar'),
  loading() {
    return <div>Loading...</div>
  }
});
const LoadableFoo = Loadable({
  loader: () => import('./Foo'),
  loading() {
    return <div>Loading...</div>
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadComponent: false
    }
  }

  handleShowFoo(e) {
    this.setState({
      loadComponent: true
    })
  }

  render() {
    return (
      <div>
        <div>I am a real app, yay</div>
        <div onClick={this.handleShowFoo.bind(this)}>Show Foo!</div>
        <LoadableBar />
        { this.state.loadComponent && <LoadableFoo /> }
      </div>
    )
  }
}

export default App;
