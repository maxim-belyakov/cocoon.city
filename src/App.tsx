import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';
import DatePicker from './components/DatePicker';
import ContactModal from './components/ContactModal';
import Home from './pages/Home';
import About from './pages/About';
import Cocoons from './pages/Cocoons';
import Invest from './pages/Invest';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cocoons" element={<Cocoons />} />
              <Route path="/invest" element={<Invest />} />
            </Routes>
          </main>
          <DatePicker />
          <ContactModal />
        </div>
      </Router>
    </Provider>
  );
}

export default App;