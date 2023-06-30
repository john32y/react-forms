import ControlledComponents from './components/ControlledComponents';
import FormSubmit from './components/FormSubmit';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Forms in React</h1>
       <p>There are many ways to deal with forms in React. Here are two common ones</p>
       <ControlledComponents />
       <FormSubmit />
      </header>
    </div>
  );
}

export default App;
