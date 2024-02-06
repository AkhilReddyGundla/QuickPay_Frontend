import {Header} from '../components/Header'
import { Subheading } from '../components/Subheading'
import { Inputfields } from '../components/Inputfields'
import { Button } from '../components/Button'
import { Bottomtext } from '../components/BottomText'
import { Topbar } from '../components/Topbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export function Signup(){
    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[password,setPassword] = useState('')
    const[username,setUserName] = useState('')

    const navigate = useNavigate()
    return (
        <>
        <Topbar/>
        <div className='grid place-content-center h-1/4 mt-7'>
           <div className='border border-sky-200 rounded-lg w-auto'>
                <div className='p-4'>
                    <Header text= "Sign Up"/>
                    <Subheading text = "Enter your information to create an account"/>
                    <Inputfields 
                    onChange = {(e)=> setFirstName(e.target.value)}
                    text = "First Name" 
                    type = "text" 
                    placeholder = "Akhil"/>

                    <Inputfields onChange = {(e)=> setLastName(e.target.value)}
                    text = "Last Name" 
                    type = "text" 
                    placeholder = "Gundla"/>

                    <Inputfields onChange = {(e)=> setUserName(e.target.value)}
                    text = "Email" 
                    type = "Email" 
                    placeholder = "akhil@gmail.com"/>

                    <Inputfields 
                    onChange = {(e)=> setPassword(e.target.value)}
                    text = "Password" 
                    type = "password"/>

                    <Button
                    onPress = {
                        async ()=>{
                            try{
                                 await axios.post("https://backendservice-7jx6.onrender.com/api/v1/user/signup",{
                                    firstName,
                                    lastName,
                                    username,
                                    password
                                })
                                console.log("some")
                                navigate("/signin")
                            }catch(e){
                                console.log(e)
                                alert("User already exists in database")
                            }
                        }

                    }
                    text = "Sign Up"/>
                    <Bottomtext text = "Already have account?" underlineText = "Log in" to="/Signin"/>
                </div>
           </div>
        </div>
        </>
    )
}