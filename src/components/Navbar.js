import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// style
import './Navbar.css';

export default function Navbar() {
  const { color } = useContext(ThemeContext);
  return (
    <div className="navbar" style={{ backgroundColor: color }}>
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
