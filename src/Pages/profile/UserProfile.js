import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userAction } from '../../Store';
import Navbar from '../Navbar';

function UserProfile() {
    const [user, setUser] = useState(null);
    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('token'); 
        axios.get('https://startoon-server-vbz8.onrender.com/api/getuser', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response)
            setUser(response.data);
        }).then(()=>{
            dispatch(userAction.login())
        })
        .catch(error => {
            console.error('Error fetching user:', error);
        });
    }, []);

    return (
        <div>
            <Navbar/>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>gender: {user.gender}</p>
                    {/* Render other user information */}
                </div>
            ) : (
                <p>Loading user profile...</p>
            )}
        </div>
    );
}

export default UserProfile;
