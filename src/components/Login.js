import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  const [value, setInputValue] = useState({email: "", password: ""});
  const navigate = useNavigate()

  function handleChange(e){
    const {name , value} = e.target;
    setInputValue((prevInput)=>({...prevInput,[name]: value}))
}

function handleSubmit(e){
    e.preventDefault();
      if(!value.email || !value.password){
      alert('Kindly check the inputs')
    }
    else{
    axios.post("http://localhost:8000/", {
        email: value.email,
        password: value.password
    }).then(
      (result)=>{
        const id = result.data.id;
        result.data.status === 'Success' ? navigate(`/home/${id}`) : navigate('/')
        }
    ).catch((err)=>{
      console.log('Error occured while login ', err)
    })}
}

  return (
    <>
   <form method='post' onSubmit={handleSubmit}>
    <h2>Login</h2>
       <label>
        Enter your Email:
        <input type='email' name='email' value={value.email} onChange={handleChange}/>
       </label>
       <label>
        Enter your Password:
        <input type='password' name='password' value={value.password} onChange={handleChange}/>
       </label>
        <input type='submit' value='Login'/>
    <Link to ="/signup">New User?</Link>
    </form>
    </>
    )
}

export default Login