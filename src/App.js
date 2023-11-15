import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
