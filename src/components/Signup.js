import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [cpassword,setcpassword]=useState('')

    const handlesubmit=(e)=>{
        e.preventDefault()
        localStorage.setItem('name',name)
        localStorage.setItem('email',email)
        localStorage.setItem('password',password)
        localStorage.setItem('cpassword',cpassword)

    }
    return (
        <div className='login'>
        <form onSubmit={handlesubmit}>
     <div className="mb-3">
       <label for="exampleInputEmail1" className="form-label">Full Name</label>
       <input type="text" className="form-control" 
       value={name}
       onChange={(e)=>setname(e.target.value)}
       id="exampleInputEmail1" aria-describedby="emailHelp" required />
      
     </div>
     <div className="mb-3">
       <label for="exampleInputPassword1" className="form-label">Email</label>
       <input type="email" className="form-control" id="exampleInputPassword1"
       value={email}
       onChange={(e)=>setemail(e.target.value)}
       required/>
     </div>
     <div className="mb-3">
       <label for="exampleInputPassword1" className="form-label">Password</label>
       <input type="password" className="form-control" 
       value={password}
       onChange={(e)=>setpassword(e.target.value)}
       id="exampleInputPassword1" required />
     </div>
     <div className="mb-3">
       <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
       <input type="password" 
       value={cpassword}
       onChange={(e)=>setcpassword(e.target.value)}
       className="form-control" id="exampleInputPassword1" required />
     </div>
     
     <NavLink to='/login'>  <button type="submit" className="btn btn-primary">Submit</button></NavLink>
   </form>
   </div>
    )
}

export default Login
