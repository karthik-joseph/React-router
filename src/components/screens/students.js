import React from 'react';
import { Link } from 'react-router-dom';

export default function Students() {
  const students = [
    {
      id:1,
      name:"Adarsh",
    },
    {
      id:2,
      name:"Anas Anzhar",
    },
    {
      id:3,
      name:"Bibin b",
    },
    {
      id:4,
      name: "Bibin Thomas",
    },
    {
      id:5,
      name:"Jerin Josey Sameaul",
    },
    {
      id:6,
      name:"Karthik",
    }
  ];
  return (
    <>
        <div>
          {students.map((student)=>(
            <>
              <h3>{student.name}</h3>
              <Link to={`${student.name}`}>View</Link>
            </>
          ))}
        </div>
    </>
  )
}
