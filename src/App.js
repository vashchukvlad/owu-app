import './App.css';
import { Launches } from './components/LauncheContainer/Launches/Launches';
import { Posts } from './components/PostContainer/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Posts />
      <h3>Second task</h3>
      <Launches />
    </div>
  );
}

export default App;
