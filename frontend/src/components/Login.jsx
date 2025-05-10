import React, { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import  Logo  from './shared/Logo'
import { Button } from './ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import axios from 'axios'

const Login = () => {
  const [input ,setInput] = useState({
    email:"",
    password:""
  });

  const  navigate = useNavigate()
  
  const changeHandler = (e) => {
    setInput({...input,[e.target.name]:e.target.value})
  }

  const submitHandler = async(e) =>{
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/v1/user/login",input, {
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
      });
      console.log(res);
      if(res.data.success){
        toast.success(res.data.message);
        navigate("/");
      }
      
    } catch (error) {
      toast.error(error.response.data.messsage);
      
    }
    
  }
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <form onSubmit={submitHandler} className='w-96 p-8 shadow-lg'>
      <div className='w-full flex justify-center mb-5'>
        <Logo/>
      </div>
        <div>
          <Label className="my-1">Email</Label>
          <Input
          type="email"
          name="email"
          value={input.email}
          onChange={changeHandler}
          />
        </div>
        <div>
          <Label className="my-1">Password</Label>
          <Input
          type="password"
          name="password"
          value={input.password}
          onChange={changeHandler}
          />
        </div>
        <Button className="w-full my-5">Login</Button>
        <p className='text-center text-sm'>Don't have an account? <Link to="/signup" className='text-blue-600'>Signup</Link></p>
      </form>
    </div>
  )
}

export default Login
