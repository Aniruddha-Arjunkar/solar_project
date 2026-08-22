import {
    UserRoundPlus,
    Users,
    X
} from "lucide-react";

import axios from "axios";

import { useState , useEffect } from "react";

import "./ViewUsers.css";

function ViewUsers() {

    const [showForm, setShowForm] = useState(false);
    const [users, setUsers] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    const [editingUserId, setEditingUserId] = useState(null);

    const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    password: ""
});


    const resetForm = () => {

    setFormData({
        name: "",
        contact: "",
        email: "",
        password: ""
    });

    setEditingUserId(null);
    setShowForm(false);
};

    //============= GET all Users =================
    useEffect(() => {

    axios
        .get("http://localhost:8080/api/users")
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
            console.error("Error fetching users:", error);
        });

         }, []);

       const handleInputChange = (event) => {
          const { name, value } = event.target;
          setFormData({
            ...formData,
          [name]: value
    });
   };
   
   //============= Create User & Update User ==========================
    const handleSubmitUser = (event) => {

    event.preventDefault();

    if (editingUserId) {

        // UPDATE USER
        axios
            .put(
                `http://localhost:8080/api/users/${editingUserId}`,
                formData
            )
            .then(response => {

                console.log("User updated:", response.data);

                setUsers(
                    users.map(user =>
                        user.id === editingUserId
                            ? response.data
                            : user
                    )
                );

                resetForm();

            })
            .catch(error => {

                console.error("Error updating user:", error);

            });

    } else {

        // CREATE USER
        axios
            .post(
                "http://localhost:8080/api/users",
                formData
            )
            .then(response => {

                console.log("User created:", response.data);

                setUsers([
                    ...users,
                    response.data
                ]);

                resetForm();

            })
            .catch(error => {

                console.error("Error creating user:", error);

            });

    }

};


    //================= Edit User ========================
     const handleEditUser = (user) => {

    setEditingUserId(user.id);

    setFormData({
        name: user.name,
        contact: user.contact,
        email: user.email,
        password: user.password
    });

    setShowForm(true);

};

    //================ Delete User ==============================
    const handleDeleteUser = (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) {
        return;
    }

    axios
        .delete(`http://localhost:8080/api/users/${id}`)
        .then(() => {

            console.log("User deleted");

            setUsers(
                users.filter(user => user.id !== id)
            );

        })
        .catch(error => {
            console.error("Error deleting user:", error);
        });

    };
    
    //================== Filter User ===================
    const filteredUsers = users.filter((user) => {
    const search = searchTerm.toLowerCase();

    return (
        user.name?.toLowerCase().includes(search) ||
        user.contact?.toLowerCase().includes(search) ||
        user.email?.toLowerCase().includes(search)
    );
});

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
                        onClick={() => {
                              setEditingUserId(null);

                              setFormData({
                                 name: "",
                                 contact: "",
                                 email: "",
                                 password: ""
                                });

                               setShowForm(true);
                               }}>
                        <UserRoundPlus size={22} />
                        Add User
                    </button>

                </div>

            </div>


            {/*=========== Add User Modal ============= */}

            {showForm && (

                <div className="user-form-overlay">

                    <div className="user-form-container">

                        {/*==== Form Header =======*/}

                        <div className="user-form-header">

                            <h2>{editingUserId ? 
                            "Edit User" : "Add New User"}</h2>

                            <button
                                className="close-form-button"
                                onClick={resetForm}>
                               <X size={22} />
                            </button>

                        </div>


                        {/* Form */}

                        <form onSubmit={handleSubmitUser}>

                            {/* Name */}

                            <div className="form-group">

                                <label htmlFor="name">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter user name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
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
                                  name="contact"
                                  placeholder="Enter contact number"
                                  value={formData.contact}
                                  onChange={handleInputChange}
                                  required
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
                                  name="email"
                                  placeholder="Enter email address"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  required
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
                                    name="password"
                                    placeholder="Enter password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />

                            </div>


                            {/* Buttons */}
                            <div className="user-form-buttons">

                                <button
                                   type="button"
                                   className="cancel-button"
                                   onClick={resetForm}>
                                   Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="save-user-button"
                                >
                                {editingUserId ? "Update User" : "Add User"}
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

        <div className="users-table-controls">
            <div className="user-search-box">
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>

            <span className="user-count">
               {filteredUsers.length} Users
            </span>

        </div>
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
                {filteredUsers.length > 0 ? (
                    filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>
                                <span className="user-id">
                                    {user.id}
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
                                <button
                                 className="edit-user-button"
                                 onClick={() => handleEditUser(user)}>
                                  Edit
                                 </button>

                                 <button
                                   className="delete-user-button"
                                   onClick={() => handleDeleteUser(user.id)}>
                                   Delete
                                 </button>

                              </div>
                            </td>
                        </tr>
                    ))
                ) : (

                    <tr>
                        <td colSpan="5" className="no-users">
                           {searchTerm
                           ? "No users found matching your search."
                           : "No users found."
                              }
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