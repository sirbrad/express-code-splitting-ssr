import React from "react";
import Loadable from 'react-loadable';
import Loading from "./Loading";

const LoadableBar = Loadable({
  loader: () => import('./Bar'),
  loading: Loading
});
const LoadableFoo = Loadable({
  loader: () => import('./Foo'),
  loading: Loading
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
