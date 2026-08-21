import {
    UserRoundPlus,
    Users,
    X
} from "lucide-react";

import { useState , useEffect } from "react";

import "./ViewUsers.css";

function ViewUsers() {

    const [showForm, setShowForm] = useState(false);
    const [users, setUsers] = useState([]);

     useEffect(() => {

        fetch("http://localhost:8080/api/users")
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });

    }, []);

    return (
        <section className="view-users-page">

            {/* -------- Page Head Section -------- */}
            <div className="page-top-div">

                <div className="top-div-heading-section">

                    <div className="breadcrumb">
                        Dashboard <span>/</span> View Users
                    </div>

                    <h1>
                        <Users size={42} strokeWidth={1.8} />
                        User Management
                    </h1>

                    <p>
                        create, delete and update Users.
                    </p>

                </div>

                <div className="top-div-button-section">

                    <button
                        className="top-div-button"
                        onClick={() => setShowForm(true)}
                    >
                        <UserRoundPlus size={22} />
                        Add User
                    </button>

                </div>

            </div>


            {/* -------- Add User Modal -------- */}

            {showForm && (

                <div className="user-form-overlay">

                    <div className="user-form-container">

                        {/* Form Header */}

                        <div className="user-form-header">

                            <h2>Add New User</h2>

                            <button
                                className="close-form-button"
                                onClick={() => setShowForm(false)}
                            >
                                <X size={22} />
                            </button>

                        </div>


                        {/* Form */}

                        <form>

                            {/* Name */}

                            <div className="form-group">

                                <label htmlFor="name">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter user name"
                                />

                            </div>


                            {/* Contact Number */}

                            <div className="form-group">

                                <label htmlFor="contact">
                                    Contact Number
                                </label>

                                <input
                                    type="tel"
                                    id="contact"
                                    placeholder="Enter contact number"
                                />

                            </div>


                            {/* Email */}

                            <div className="form-group">

                                <label htmlFor="email">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter email address"
                                />

                            </div>


                            {/* Password */}

                            <div className="form-group">

                                <label htmlFor="password">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter password"
                                />

                            </div>


                            {/* Buttons */}

                            <div className="user-form-buttons">

                                <button
                                    type="button"
                                    className="cancel-button"
                                    onClick={() => setShowForm(false)}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="save-user-button"
                                >
                                    Add User
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            )}
        {/*-- Table --*/}
           {/* -------- Users Table -------- */}

<div className="users-table-section">

    <div className="users-table-header">
        <div>
            <h2>All Users</h2>
            <p>Manage users registered in the system.</p>
        </div>

        <span className="user-count">
            {users.length} Users
        </span>
    </div>


    <div className="users-table-wrapper">

        <table className="users-table">

            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Contact Number</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>


            <tbody>

                {users.length > 0 ? (

                    users.map(user => (

                        <tr key={user.id}>

                            <td>
                                <span className="user-id">
                                    #{user.id}
                                </span>
                            </td>

                            <td>
                                <div className="user-name-cell">

                                    <div className="user-avatar">
                                        {user.name?.charAt(0).toUpperCase()}
                                    </div>

                                    <span>
                                        {user.name}
                                    </span>

                                </div>
                            </td>

                            <td>
                                {user.contact}
                            </td>

                            <td>
                                {user.email}
                            </td>

                            <td>

                                <div className="user-actions">

                                    <button className="edit-user-button">
                                        Edit
                                    </button>

                                    <button className="delete-user-button">
                                        Delete
                                    </button>

                                </div>

                            </td>

                        </tr>

                    ))

                ) : (

                    <tr>
                        <td colSpan="5" className="no-users">
                            No users found.
                        </td>
                    </tr>

                )}

            </tbody>

        </table>

    </div>

</div>
        </section>
    );
}

export default ViewUsers;