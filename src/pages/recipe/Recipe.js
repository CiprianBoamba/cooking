import React from 'react';
import { useParams } from 'react-router-dom';

// style
import './Recipe.css';

// import components
import { useFetch } from '../../hooks/useFetch ';

export default function Recipe() {
  const { id } = useParams();

  const url = ' http://localhost:3000/recipes/' + id;

  const { error, isPending, data: recipe } = useFetch(url);
  return (
    <div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && <h1>{recipe.title}</h1>}
    </div>
  );
}
