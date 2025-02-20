import React from "react";
import { Helmet } from "react-helmet";
import "../adminUsers/adminUsers.css";
import { useGetUsersQuery } from "../../../redux/Slices/userSlices";

function AdminUser() {
  let {data,isLoading} = useGetUsersQuery()
  



  return (
    <div className="admin-users">
      <Helmet>
        <title>Admin Users - Half Baked Harvest</title>
      </Helmet>
      <div className="admin-users-container">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : data.length === 0 ? (
          <h2>No Users Found</h2>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdminUser;
