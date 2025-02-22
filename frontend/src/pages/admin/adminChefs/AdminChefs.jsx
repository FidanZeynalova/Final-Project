import React from 'react'
import { useGetChefsQuery } from '../../../redux/Slices/chefSlices'
import { Helmet } from 'react-helmet'
import "../adminChefs/AdminChefs.css"

function AdminChefs() {
    let { data, isLoading, error } = useGetChefsQuery()
    return (
        <>
            <Helmet>
                <title>Admin Chefs - Half Baked Harvest</title>
            </Helmet>
            <div className="AdminChefs">
                <div className="AdminChefsContainer">
                    {isLoading ? (
                        <h2>Loading...</h2>
                    ) : error ? (
                        <h2>Error loading chefs</h2>
                    ) : !data || data.length === 0 ? (
                        <h2>No Chefs Found</h2>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Chef Name</th>
                                    <th>Experience</th>
                                    <th>Specialty</th>
                                    <th>Chef Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item._id}>
                                        <td>{item._id}</td>
                                        <td>{item.chefName}</td>
                                        <td>{item.experience}</td>
                                        <td>{item.specialty}</td>
                                        <td className='profile-pic'><img src="https://is.gd/oXqMAt " alt="" /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    )
}

export default AdminChefs
