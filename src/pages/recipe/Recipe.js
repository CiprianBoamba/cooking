import React from 'react';
import { useParams } from 'react-router-dom';

// style
import './Recipe.css';

// import components
import { useFetch } from '../../hooks/useFetch ';

export default function Recipe() {
  const { id } = useParams();

  const url = ' http://localhost:3000/recipes' + id;

  const { data } = useFetch(url);
  return (
    <div>
      <h2>{data.title}</h2>
    </div>
  );
}
