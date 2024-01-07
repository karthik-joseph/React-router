import React from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';

export default function About() {
  const  [searchParams,setSearchParams] = useSearchParams();
  const name = searchParams.get('action');
  return (
   <>
    <Helmet>
      <title>About</title>
    </Helmet>
    <h1>About</h1>
    <button onClick={()=> setSearchParams({action:"login"})}>Add</button>
    <button onClick={()=> setSearchParams()}>Remove</button>
    <h2>Action is from query {name}</h2>
   </>
  )
}
