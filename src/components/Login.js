import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const handlelogin=(e)=>{
      e.preventDefault()
      let mail=localStorage.getItem('email')
      let pass=localStorage.getItem('password')

      if(email===mail || pass===password){
        console.log("user logined");
      }

    }
    
    return (
        <div className='login'>
     <form onSubmit={handlelogin}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={(e)=>setemail(e.target.value)}
    value={email}
    />
   
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    value={password}
    onChange={(e)=>setpassword(e.target.value)}
    />
  </div>
 
  <NavLink to="/"><button type="submit" className="btn btn-primary">Submit</button></NavLink>
</form>
  
            
        </div>
    )
}

export default Login
