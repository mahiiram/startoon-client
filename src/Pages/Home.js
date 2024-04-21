import React, { useState } from 'react'
import UserLogin from '../Components/User/Login'
import AdminLogin from '../Components/Admin/Login';

function Home() {
    const [form,setForm] = useState("User");

    const switchForm = ()=>{
        setForm(form=>(form==="User"? 'Admin' : "User"))
    }
  return (
    <div className='Home'>
       <div className='Maindiv'>
         {form ==='User'? <UserLogin/> : <AdminLogin />}
         <div style={{display:'flex',justifyContent:"center"}}>
         <button type="button" class="btn btn-danger" onClick={switchForm}>Switch to {form === 'User'? 'Admin':"User"} login</button>
         </div>
       </div>
    </div>
  )
}

export default Home