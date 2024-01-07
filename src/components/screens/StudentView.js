import React from 'react';
import { useParams } from 'react-router-dom';

export default function StudentView() {
  const {name} = useParams();
  return (
    <div>
      <h1>
        My name is {name}
      </h1>
    </div>
  )
}
