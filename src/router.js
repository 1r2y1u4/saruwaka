import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopPage from './components/topPage';
import Header from './components/header';

function AppRoutes() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<TopPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;