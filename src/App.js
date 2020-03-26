import React, {Component, Fragment} from 'react';
import { Provider } from 'react-redux';
import ImageGrid from './components/ImageGrid';
import configureStore from './store';
const store = configureStore();
class App extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render () {
    return (
      <Provider store={store}>
          <Fragment>
              <ImageGrid />
          </Fragment>
      </Provider>
  );
  }
}

export default App;
