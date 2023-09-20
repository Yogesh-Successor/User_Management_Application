import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Home = () => {
  const {id} = useParams()
  const [userData, setUserData] = useState({})
  const navigate = useNavigate()
  useEffect(
    ()=>{
      axios.post(`http://localhost:8000/home/${id}`,
      {id: id})
      .then((result)=>{
        setUserData(result.data)
        //setUserData({userId: data.id})
      })
      .catch(err=>{
        console.log(err)
      })
    }
  )
  function handleClick(){
    const id = userData._id
    navigate(`/update/${id}`)
  }
  function handleLogOff(){
    navigate('/')
  }
  return (
    <>
    <table>
      <thead>
      <tr>
        <th>Username</th>
        <th>Email</th>
        <th>Age</th>
        <th>DOB</th>
        <th>Contact</th>
      </tr>
      </thead>
      <tbody>

      <tr>
        <td>
          <h4>{userData.name}</h4>
        </td>
        <td>
          <h4>{userData.email}</h4>
        </td>
        <td>
          <h4>{userData.password}</h4>
        </td>
        <td>
          <h4>{userData.age}</h4>
        </td>
        <td>
          <h4>{userData.dob}</h4>
        </td>
        <td>
          <h4>{userData.contact}</h4>
        </td>
        <td>
         <button onClick = {handleClick}>Update</button>
        </td>
      </tr>
      </tbody>
    </table>
    <button onClick = {handleLogOff}>Log Out</button>
    </>
    )
}

export default Home