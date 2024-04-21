import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Toaster, toast } from 'react-hot-toast';
import { adminLogin} from '../../helper/helper.js';
import { profileValidation } from '../../helper/Validate.js';


function AdminLogin() {
   
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validate: profileValidation,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async values =>{
      values = await Object.assign(values)
     const registerPromise = adminLogin(values);
     toast.promise(registerPromise,{
      loading:'creating....',
      success: <b>Register successfully</b>,
      error: <b>Couldnt Register</b>

     })
     console.log(values)
      localStorage.setItem('email',values.email)
       registerPromise.then(function(){navigate('/adminprofile')})
    }
    
  })

  return (
    
    <div>
      <Toaster position='top-right' reverseOrder={false} />
      <div>  
       <div className='text'>
        <h1>Login</h1>
        <p>Admin Login</p>
       </div>
      <div className='form-div'>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label" >Email</label>
          <input {...formik.getFieldProps('email')} placeholder='Enter Email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <label for="exampleInputEmail1" className="form-label" placeholder='Enter Email'>Password</label>
            <input {...formik.getFieldProps('password')} placeholder='Enter Password' type="password" className="form-control"/>
            <div id="emailHelp" className="form-text">We'll never share your password with anyone else.</div>
          </div>
          <div className='button-div'>
          <button type="submit" className="btn btn-primary" >Login</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default AdminLogin