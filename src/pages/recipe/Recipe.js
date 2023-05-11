import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// style
import './Recipe.css';

// import components
import { useTheme } from '../../hooks/useTheme';
import { projectFirestore } from '../../firebase/config';

export default function Recipe() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const { mode } = useTheme();

  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore
      .collection('recipes')
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError('Could not find that recipe');
        }
      });

    return () => unsub();
  }, [id]);

  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: 'updating new title',
    });
  };

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
          <button onClick={handleClick}>upadete me</button>
        </>
      )}
    </div>
  );
}
