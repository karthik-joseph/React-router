import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Home page</h1>
      <h3 onClick={()=>navigate('/contact')}>Go to contact page</h3>
    </>
  )
}
