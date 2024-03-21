import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Link,  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import CountCharacter from './components/countCharacter'
import './css/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Header />
          <div>
            <nav className="navigation">
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/count" className="nav-link">文字数カウント</Link>
                </li>
                <li className="nav-item">
                  <Link to="/conversion" className="nav-link">単位変換</Link>
                </li>
              </ul>
            </nav>
          <Routes>
            <Route path="/count" element={<CountCharacter />} />
            <Route path="/conversion" element={<CountCharacter />} />
          </Routes>
        </div>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
