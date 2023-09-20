import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const [value, setInputValue] = useState({username: "", email: "", password: "", confirmPassword: ""});
    const navigate = useNavigate()

    function handleChange(e){
        const {name , value} = e.target;
        setInputValue((prevInput)=>({...prevInput,[name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault();
        if(value.password !== value.confirmPassword ||
            !value.email  || !value.username|| !value.password ){   
                alert('Kindly check your input')}
                else{
        axios.post("http://localhost:8000/signup", {
            name: value.username,
            email: value.email,
            password: value.password,
            confirmPassword: value.confirmPassword
        })
        .then((result)=>{
            result.data === "Success" && navigate('/')
            result.data === "Error" && navigate('/signup')
            result.data === "Exists" && navigate('/')
        })
    }
}
  return (
    <>
    <form action = "/signup" method='post' onSubmit={handleSubmit}>
        <h2>Sign Up</h2>  
        <label>
            Enter your Username:
        </label>
        <input type='text' name='username' value={value.username} onChange={handleChange}/>
        <label>
            Enter your Email:
        </label>
        <input type='email' name='email' value={value.email} onChange={handleChange}/>
        <label>
            Enter your Password:
        </label>
        <input type='password' name='password' value={value.password} onChange={handleChange}/>
        <label>
           Confirm your Password:
        </label>
        <input type='password' name='confirmPassword' value={value.confirmPassword} onChange={handleChange}/>
        <input type='submit' value='Sign Up'/>
    <Link to ="/">Already registered?</Link>
    </form>
    </>
  )
}

export default Signup