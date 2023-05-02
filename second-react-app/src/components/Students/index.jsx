import React from 'react'

const Students = ({students}) => {
    
  return (


    <ul>
        {students.map((student,idx)=>{
            return <li key={idx}>{student.name}, {student.age} <button>delete</button></li>
        })}
    </ul>
  )
}

export default Students