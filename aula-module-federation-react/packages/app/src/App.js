import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./app.css";

const App = () => {
  const HomePage = lazy(() => import("HomeApp/HomePage"));
  const ContactPage = lazy(() => import("ContactApp/ContactPage"));

  return (
    <Router>
      <header>
        <h1>Teste</h1>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/home" element={<Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><ContactPage /></Suspense>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
