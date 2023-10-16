import './App.css';
import { Characters } from './components/characters/Characters';
import { Simpsons } from './components/simpsons/Simpsons';

function App() {
  return (
    <div className="App">
      <h2>First task:</h2>
      <Simpsons />
      <br />

      <h2>Second task: </h2>
      <Characters />
    </div>
  );
}

export default App;
