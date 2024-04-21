import React from "react";
import { toast } from "react-hot-toast";

export async function passwordValidate(values){
    const errors = passwordVerify({},values);
    return errors;
}


export async function registerValidation(values){
    const errors = NameVerify({},values);
    passwordVerify(errors,values);
    emailVerify(errors,values)
    return errors;
}

export async function profileValidation(values){
    const errors = emailVerify({},values);
    passwordVerify(errors,values);
    return errors;
}
export async function LoginprofileValidation(values){
    const errors = emailornameVerify({},values);
    passwordVerify(errors,values);
    return errors;
}

//validate password
function passwordVerify(error={},values){
const specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/;

    if(!values.password){
        error.password = toast.error('Password Required')
    }else if(values.password.includes(" ")){
        error.password = toast.error('Invalid Password')
    }else if(values.password.length<6){
        error.password = toast.error('Passord must be in more than 6 character')
    }else if(!specialChar.test(values.password)){
        error.password = toast.error('Password must have one special character and number')
    }
     return error;

}


//validate name
function NameVerify(error={}, values){
    if(!values.name){
        error.name = toast.error('User Name Required')
    }else if(values.name.includes(" ")){
        error.name = toast.error('Invalid User Name')
    }
     return error;

}

function emailVerify(error={},values){
    if(!values.email){
        error.email = toast.error('Email Required');
    }else if(values.email.includes(" ")){
        error.email = toast.error('Wrong Email');
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error('Invalid Email Address')
    }
    return error
}

function emailornameVerify(error={},values){
    if(!values.EmailOrName){
        error.email = toast.error('Email or name Required');
    }else if(values.EmailOrName.includes(" ")){
        error.email = toast.error('Wrong Email');
    }
    return error
}