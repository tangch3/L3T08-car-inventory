import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AllCars } from './pages/all-cars'
import { AddCars } from './pages/add-cars';
import { OlderThan5 } from './pages/older-than-5';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Car Inventory</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllCars />} />
          <Route path="/add-cars" element={<AddCars />} />
          <Route path="/older-than-5" element={<OlderThan5 />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
