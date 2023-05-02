
import { useState } from 'react';
import { students } from '../../data';
import { v4 as uuidv4 } from 'uuid';
function ToDo() {
    
    const [studentsState, setStudentsState] = useState(students);
    const [student, setStudent] = useState({name:'',age:0});
    function handleAddStudent() {
        console.log(student);
        setStudentsState([...studentsState,student]);
        setStudent({name:'',age:0})
    }
    function handleChange(e) {
        console.log(e.target.value);
        setStudent({...student,[e.target.name]:e.target.value})
        student.id = uuidv4();
        
    }
    function handleSort() {
        let sortedStudents = [...studentsState.sort((x,y)=>x.age-y.age)];
        setStudentsState(sortedStudents);

    }
    function handleSearch(e) {
        if(e.target.value.trim()===""){
            setStudentsState(students)
        }
        else{
            let filteredStudents = studentsState.filter((student,idx)=>student.name.toLocaleLowerCase().trim().includes(e.target.value.toLocaleLowerCase().trim()))
            setStudentsState(filteredStudents)
        }
    }
    function handleDelete(id) {
        setStudentsState(studentsState.filter((stu)=>stu.id!==id))
    }
    return (
    
    <>
    {
      
    }
    <h1>Students:</h1>
    <input onChange={(e)=>handleSearch(e)} placeholder='search student'></input>
    <button onClick={handleSort}>Sort by age</button>
    <button >Is Done</button>
    <ul>
        {studentsState.map((student,idx)=>{
            return <li key={idx}>{student.name}, {student.age} <button onClick={()=>handleDelete(student.id)} >delete</button><button >done</button></li>
              
            
        })}
    </ul>
    <h4>Add new student</h4>
    <input name='name' value={student.name} onChange={(e)=>handleChange(e)} placeholder='name' type='text'/>
    <input name='age' value={student.age} onChange={(e)=>handleChange(e)} placeholder='age' type='number' min="0" max="100"/>
    <button onClick={handleAddStudent}>Add student</button>
    </>
  );
}

export default ToDo;
