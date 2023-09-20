import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate, useParams } from "react-router-dom"

function Update(){
    const [value, setValue ] = useState({name: '', email: '', 
password: '', age: 0, dob: "", contact: 0})    
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(()=>{
        axios.post(`http://localhost:8000/home/${id}`,
          {id: id})
          .then((result)=>{
            console.log(result.data)
            setValue(result.data)
          })
          .catch(err=>{
            console.log(err)
          })
    },[])
    function handleUpdate(){
        axios.put(`http://localhost:8000/update/${id}`, {id: id,
    name: value.name, email: value.email, password: value.password,
age: value.age, dob: value.dob, contact: value.contact})
    .then(result=>{
        console.log(result.data.data);
        return result.data.status === 'Success' ? navigate(`/home/${id}`) : null;
    })
    .catch(err=>{
        console.log(err)
    })

}  
function handleClose(){
    navigate(`/home/${id}`)
}   
function handleChange(e){
    const {name, value} = e.target;
    setValue((prevValue)=>({...prevValue, [name]: value}))
}
return(
    <>
    <table>
      <thead>
      <tr>
        <th>Username</th>
        <th>Email</th>
        <th>Password</th>
        <th>Age</th>
        <th>DOB</th>
        <th>Contact</th>
      </tr>
      </thead>
      <tbody>

      <tr>
        <td>
         <input name="name" value={value.name} onChange={handleChange}/>
        </td>
        <td>
         <input name='email' value={value.email} onChange={handleChange}/>
        </td>
        <td>
         <input name="password" value={value.password} onChange={handleChange}/>     
        </td>
        <td>
         <input name="age" value={value.age} onChange={handleChange}/>
        </td>
        <td>
         <input name="dob" value={value.dob} onChange={handleChange}/>
        </td>
        <td>
         <input name="contact" value={value.contact} onChange={handleChange}/>
        </td>
        </tr>
      </tbody>
    </table>
    <button onClick = {handleUpdate}>Update Data</button>
    <button onClick = {handleClose}>Close</button>
    </>
)

}
export default Update