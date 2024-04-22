
import React, { useState } from 'react';
import { Link, NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminAction, userAction } from '../Store/index.js';

function Navbar() {
    const dispatch = useDispatch()
    const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
    const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const logout = (isAdmin) => {
        dispatch(isAdmin ? adminAction.logout() : userAction.logout())
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to={'/'}>Profile</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">


                            {isAdminLoggedIn && (
                                <>
                                    <li class="nav-item">
                                        <Link class="nav-link active" aria-current="page" to={'/graphchart'}><button className="btn btn-outline-success" type="button">Graph</button></Link>
                                    </li>
                                </>
                            )}
                        </ul>

                        {isUserLoggedIn && (
                            <>
                                <NavLink to={'/'}><button className='btn btn-outline-success ml-2' onClick={() => logout(false)}>Logout</button></NavLink>
                            </>
                        )}
                        {isAdminLoggedIn && (
                            <>
                                
                                    <NavLink to={'/'}><button className='btn btn-outline-success ml-2' onClick={() => logout(true)}>Logout</button></NavLink>
                               
                            </>
                        )}


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
