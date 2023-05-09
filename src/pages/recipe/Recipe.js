import React from 'react';
import { useParams } from 'react-router-dom';

// style
import './Recipe.css';

// import components
import { useFetch } from '../../hooks/useFetch ';
import { useTheme } from '../../hooks/useTheme';

export default function Recipe() {
  const { id } = useParams();

  const url = ' http://localhost:3000/recipes/' + id;

  const { error, isPending, data: recipe } = useFetch(url);
  const { mode } = useTheme();

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} minutes to cook...</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}
