import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaRegTrashAlt } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';


const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const axiosPublic = useAxiosPublic(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error( error); 
      }
    };

    fetchData();
  }, []);

  const fetchUsers = () => {
    axiosPublic.get('/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log('delete button clicked')
        axiosPublic.delete(`/users/${user._id}`)
          .then(() => {
            Swal.fire({
              title: 'Deleted!',
              text: 'User has been deleted.',
              icon: 'success'
            });
            fetchUsers();
          })
          .catch((error) => {
            console.error('Error deleting survey:', error);
          });
      }
    });
  };
  

  const handleMakeAdmin = user => {
      // console.log('user', user) 
      axiosPublic.patch(`users/admin/${user._id}`) 
      .then(res => {
        console.log(res.data); 
        if(res.data.modifiedCount){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500
          });
          fetchUsers();
        }
      })
  }


  return (
    <div className="container mx-auto mb-10 mt-8">
      <h1 className="text-2xl font-bold mb-4">User Table</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">Id</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Action</th>
          </tr>
          <Helmet>
            <title>Voxly | All users</title>
          </Helmet>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border">{index + 1}</td>
              <td className="py-2 px-4 border">{user.name}</td>
              <td className="py-2 px-4 border">{user.email}</td>
              <td className="py-2 flex justify-around px-4 border-t">
              { user.role === 'admin' ? 'Admin' :
                <FaRegTrashAlt className='cursor-pointer' onClick={() => handleDeleteUser(user)}/>
                }
              <MdAdminPanelSettings className='cursor-pointer' onClick={() => handleMakeAdmin(user)}></MdAdminPanelSettings>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
