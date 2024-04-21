import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Toaster, toast } from 'react-hot-toast';
import { LoginprofileValidation, profileValidation } from '../../helper/Validate.js';
import { userLogin } from '../../helper/helper.js';


function UserLogin() {
   
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      EmailOrName:'',
      password:''
    },
    validate: LoginprofileValidation,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async values =>{
      values = await Object.assign(values)
     const registerPromise = userLogin(values);
     toast.promise(registerPromise,{
      loading:'creating....',
      success: <b>Register successfully</b>,
      error: <b>Couldnt Register</b>

     }).then(() => {
        
        navigate('/userprofile');
        localStorage.setItem('emailorname',values.EmailOrName)
      }).catch((error) => {
        console.error(error);
        toast.error('An error occurred during login.');
      });
      console.log(values)
    }
    
  })

  return (
    
    <div>
      <Toaster position='top-right' reverseOrder={false} />
      <div >  
       <div className='text'>
        <h1>Login</h1>
        <p>User Login</p>
       </div>
      <div className='form-div'>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label" >Email or Name</label>
            <input {...formik.getFieldProps('EmailOrName')} name="EmailOrName" placeholder='Enter Email or Name' type="text" className="form-control" />
            <label for="exampleInputEmail1" className="form-label" placeholder='Enter Email'>Password</label>
            <input {...formik.getFieldProps('password')} placeholder='Enter Password' name="password" type="password" className="form-control"/>
            <div id="emailHelp" className="form-text" >We'll never share your password with anyone else.</div>
          </div>
          <div className='button-div'>
          <button type="submit" className="btn btn-primary" >Login</button>
          </div>
          <div className='button-div'><p>doesnt have an account? <span><Link to='/register' >SignUp</Link></span></p>
          </div>
          
          
        </form>
      </div>
    </div>
    </div>
  )
}

export default UserLogin