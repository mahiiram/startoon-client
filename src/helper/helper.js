import axios from 'axios';



/** register user function */
export async function registerUser(credentials){
    const data  = await axios.post(`https://startoon-server-vbz8.onrender.com/api/user/register`,{
         name:credentials.name,
         email:credentials.email,
         password:credentials.password,
         gender:credentials.gender
      }).catch((err)=>console.log(err))   
      console.log(data)
      localStorage.setItem('token',data.data.token)
      return Promise.resolve(data.message)
}


export async function userLogin(credentials){
    const data  = await axios.post(`https://startoon-server-vbz8.onrender.com/api/user/login`,{
         EmailOrName:credentials.EmailOrName,
         password:credentials.password,
      }).catch((err)=>console.log(err))  
       console.log(data)
      localStorage.setItem('token',data.data.token)
      return Promise.resolve(data.message)
}

export async function adminLogin(credentials){
    const data  = await axios.post(`https://startoon-server-vbz8.onrender.com/api/admin/login`,{
         email:credentials.email,
         password:credentials.password,
      }).catch((err)=>console.log(err))  
       console.log(data)
      localStorage.setItem('token',data.data.token)
      localStorage.setItem('adminId',data.data.Adminid)
      return Promise.resolve(data.message)
}