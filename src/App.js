import ListTask from './components/ListTask/ListTask';
import AddTask from './components/AddTask/AddTask';

import "./App.css"
function App() {
  return (
    <div className="App">
      <h1> List To Do </h1>
      <AddTask />

      
      <ListTask />
    </div>
  );
}

export default App;
