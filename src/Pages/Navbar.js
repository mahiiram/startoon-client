
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
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
            {/* <nav className="navbar navbar-dark bg-dark p-1">
                <div className="container-fluid">
                    {isUserLoggedIn && (
                        <>
                            <NavLink to={'/'}><h1 style={{ textDecoration: 'none', color: '#f5bf42' }}>Profile</h1></NavLink>
                        </>
                    )}
                    {isAdminLoggedIn && (
                        <>
                            <NavLink to={'/'}><h1 style={{ textDecoration: 'none', color: '#f5bf42' }}>Profile</h1></NavLink>
                            <NavLink to={'/graphchart'}>
                                <button className="btn btn-outline-success" type="button">Graph</button>
                            </NavLink>

                        </>
                    )}
                    <div className="d-grid gap-1 d-md-block">
                        {isUserLoggedIn && (
                            <>
                                <NavLink to={'/'}><h1 style={{ textDecoration: 'none', color: '#f5bf42' }} onClick={() => logout(false)}>Logout</h1></NavLink>
                            </>
                        )}
                        {isAdminLoggedIn && (
                            <>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </>
                        )}
                        {isAdminLoggedIn && (
                            <>
                          <NavLink to={'/'}><button className='btn btn-outline-success' onClick={() => logout(false)}>Logout</button></NavLink>
                            </>
                        )}
                         
                    </div>

                </div>
            </nav> */}


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
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                    <NavLink to={'/'}><button className='btn btn-outline-success ml-2' onClick={() => logout(false)}>Logout</button></NavLink>
                                </form>
                            </>
                        )}


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
