import React from 'react';
import { Link } from 'react-router-dom';
// style
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking</h1>
        </Link>
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
