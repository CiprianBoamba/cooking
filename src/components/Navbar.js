import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

// style
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
