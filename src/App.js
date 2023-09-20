import Home from "./components/Profile"
import Login from "./components/Login"
import Signup from "./components/Signup"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Update from "./components/Update"


function App(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Login />} />
            <Route path="/signup" element = { <Signup />}/>
            <Route path="/home/:id" element = {<Home />}/>
            <Route path="/update/:id" element = {<Update />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App