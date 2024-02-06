import {Header} from '../components/Header'
import {Subheading} from '../components/Subheading'
import {Inputfields} from '../components/Inputfields'
import { Button } from '../components/Button'
import { Bottomtext } from '../components/BottomText'
import { Topbar } from '../components/Topbar'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export function Signin(){
    const[password,setPassword] = useState('')
    const[username,setUserName] = useState('')
    const navigate = useNavigate();
    return (
        <>
        <Topbar/>
        <div className='grid place-content-center h-screen'>
            <div className='border border-sky-200 rounded-lg w-auto'>
                <div className='p-4'>
                    <Header text = "Sign In"/>

                    <Subheading text = "Enter your credentials to access your account"/>

                    <Inputfields
                    onChange={(e)=>setUserName(e.target.value)}
                     text = "Email" type = "text" 
                     placeholder= "akhil@gmail.com"/>

                    <Inputfields 
                    onChange={(e)=>setPassword(e.target.value)} 
                    text = "Password" 
                    type = "password"/>

                    <Button onPress={async()=>{
                        try{

                            const response = await axios.post("https://backendservice-7jx6.onrender.com/api/v1/user/signin",{
                                username,
                                password
                            })
                            console.log(response)
                            localStorage.setItem("username",response.data.username)
                            localStorage.setItem("token",response.data.token)
                            localStorage.setItem("firstName",response.data.firstName)
                            navigate("/dashboard")
                        }catch(err){
                            navigate("/dashboard")
                        }
                    }}
                    text = "Sign In"/>
                    <Bottomtext text = "Don't have an account yet?" underlineText = "Sign Up" to = "/Signup"/>
                </div>
            </div>
        </div>
        </>
    )
}