import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Link,  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Count from './components/countCharacter'
import Escape from './components/htmlEscape'
import Conversion from './components/unitConversion'
import Age from './components/ageConversion'
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
                  <Link to="/escape" className="nav-link">HTMLエスケープ</Link>
                </li>
                <li className="nav-item">
                  <Link to="/conversion" className="nav-link">バイト変換</Link>
                </li>
                <li className="nav-item">
                  <Link to="/age" className="nav-link">年齢検索</Link>
                </li>
              </ul>
            </nav>
          <Routes>
            <Route path="/count" element={<Count />} />
            <Route path="/escape" element={<Escape />} />
            <Route path="/conversion" element={<Conversion />} />
            <Route path="/age" element={<Age />} />
          </Routes>
        </div>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
