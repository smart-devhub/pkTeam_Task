import React from 'react'

function Details() {
    
    const data=JSON.parse(localStorage.getItem("user"))
    
    

    return (
        <div>
            
            
                
                    <div className='userdata'>
                        <h1 className='text-primary text-center mb-2 p-3'>{data.first_name}{data.last_name} Data</h1>
                        <ul>
                            <li>id----:{data.uid}</li>
                            <li>FirstName---:{data.first_name}</li>
                            <li>LastName---:{data.last_name}</li>
                            <li>Email---:{data.email}</li>
                            <li>Password---:{data.password}</li>
                            <li>City---:{data.address.city}</li>
                        </ul>
                    </div>
                
            
        </div>
    )
}

export default Details
