import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './Redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import UserDetails from './components/UserDetails';
import IceCream from './components/IceCream';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <UserDetails/>
        <IceCream/>
      </div>
    </Provider>
  );
}

export default App;
