import logo from './logo.svg';
import './App.css';
//name can be different fom the export name
import MyComponent from './components/Greet'
//This needs to be the same as the constant exported
import {SecGreet} from './components/SecondGreet'

function App() {
  return (
    <div className="App">
      <SecGreet/>
      <MyComponent/>
    </div>
  );  
}

export default App;
