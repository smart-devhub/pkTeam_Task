import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'



function Home() {
    const [users,setuser]=useState([])
    const [flag,setflag]=useState(false)
    

    useEffect(()=>{
         loadData()
    },[])

    const loadData= async ()=>{
        setflag(!flag)
        const result=await axios.get("https://random-data-api.com/api/users/random_user?size=5")
       
        setuser(result.data)
        
    }
   function deleteData(id){
     const del= users.filter(user=>user.uid !== id)
      setflag(!flag)
      loadData()
   }


 function setdata(user){
   localStorage.setItem("user",JSON.stringify(user))
 }
      

    
   


    return (
        <div>
            
            <div class="homedata">
               
         {
              flag ?
              
              (<table class="table border shadow">
                <thead className='bg-dark text-white'>
                  <tr>
                    <th scope="col">uid</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                 {
                   users.map((user)=>(
                     <tr key={user.uid}>
                       <td>{user.uid}</td>
                       <td>{user.first_name}</td>
                       <td>{user.last_name}</td>
                       <td>{user.email}</td>
                       <td>
                        <Link to={`/detail/${user.uid}`} onClick={()=>setdata(user)} className='btn btn-primary mx-3'>View</Link>
                        <Link to="" className="btn btn-danger" onClick={()=>deleteData(user.uid)}>Delete</Link> 
                         
                       </td>
                     </tr>
                   ))
                 }
                
                </tbody>
              </table>)

               : "no data"

         }  
            </div>

        </div>
    )
}

export default Home
