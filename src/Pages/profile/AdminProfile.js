import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { adminAction } from '../../Store';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

function AdminProfile() {
    const [admin, setAdmin] = useState(null);
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(0);
    const usersPerPage = 10;
    useEffect(() => {
        axios.get('http://localhost:5000/api/admin/getalluser')
        .then(response => {
            console.log(response.data)
            setAdmin(response.data);
        }).then(()=>{
            dispatch(adminAction.login())
        })
        .catch(error => {
            console.error('Error fetching user:', error);
        });
    }, [dispatch]);
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
      };
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      };
  const offset = currentPage * usersPerPage;
  return (
    <div>
        <Navbar />
       <div>
      {admin && (
        <div className='m-4'>
          <table className="table table-dark table-striped-columns">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Count</th>
                <th scope="col">Last Login Date</th>
              </tr>
            </thead>
            <tbody>
              {admin.slice(offset, offset + usersPerPage).map((user, index) => (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.count}</td>
                  <td>{formatDate(user.lastLoginDate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ReactPaginate
            pageCount={Math.ceil(admin.length / usersPerPage)}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </div>
      )}
    </div>
        </div>
  )
}

export default AdminProfile