// import Dashboard from '@mui/icons-material/Dashboard';
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import DeletePopup from './Components/DeletePopup';
import Employee from './Components/Employee';
import Jobs from './Components/Jobs';
import Footer from './Components/Footer';
import Checkout from './Components/Checkout';

function App() {
  return (
    <div className="App">
  
  <Navbar />
  <Dashboard />
  <DeletePopup />
  <Jobs />
  <Employee />
  <Checkout />
  <Footer />
    </div>
  );
}

export default App;
