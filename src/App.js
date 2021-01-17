import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Test } from './components/header/Test'
import { Sidebar } from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
