import {
    UserRound,
    Mail,
    LockKeyhole,
    X
} from "lucide-react";

import { useState } from "react";

import "./Login.css";


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleClear = () => {
        setEmail("");
        setPassword("");
    };


    const handleLogin = (event) => {

        event.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);

    };


    return (

        <section className="admin-login-page">

            <div className="admin-login-container">

                {/* ================= LEFT SECTION ================= */}

                <div className="admin-login-greet">

                    <div className="admin-login-greet-content">

                        <div className="admin-login-icon">
                            <UserRound size={32} strokeWidth={1.8} />
                        </div>

                        <h1>
                            Welcome Back
                        </h1>

                        <h2>
                            Admin Dashboard
                        </h2>

                        <p>
                            Login to manage your Solar Services
                            administration panel.
                        </p>

                    </div>

                </div>


                {/* ================= RIGHT SECTION ================= */}

                <div className="admin-login-main">

                    <div className="admin-login-form-wrapper">

                        <div className="admin-login-heading">

                            <span className="admin-login-small-heading">
                                ADMIN PORTAL
                            </span>

                            <h1>
                                Login Here
                            </h1>

                            <p>
                                Enter your credentials to continue.
                            </p>

                        </div>


                        {/* ================= FORM ================= */}

                        <form
                            onSubmit={handleLogin}
                            className="admin-login-form"
                        >

                            {/* Email */}

                            <div className="admin-login-input-container">

                                <label
                                    htmlFor="email"
                                    className="admin-input-label"
                                >
                                    Email Address
                                </label>

                                <div className="admin-input-wrapper">

                                    <Mail
                                        className="admin-input-icon"
                                        size={19}
                                        strokeWidth={1.8}
                                    />

                                    <input
                                        id="email"
                                        className="admin-input-field"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(event) =>
                                            setEmail(event.target.value)
                                        }
                                        required
                                    />

                                </div>

                            </div>


                            {/* Password */}

                            <div className="admin-login-input-container">

                                <label
                                    htmlFor="password"
                                    className="admin-input-label"
                                >
                                    Password
                                </label>

                                <div className="admin-input-wrapper">

                                    <LockKeyhole
                                        className="admin-input-icon"
                                        size={19}
                                        strokeWidth={1.8}
                                    />

                                    <input
                                        id="password"
                                        className="admin-input-field"
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                        required
                                    />

                                </div>

                            </div>


                            {/* ================= BUTTONS ================= */}

                            <div className="admin-login-footer">

                                <button
                                    type="button"
                                    className="admin-clear-btn"
                                    onClick={handleClear}
                                >
                                    <X size={18} />
                                    Clear
                                </button>


                                <button
                                    type="submit"
                                    className="admin-login-btn"
                                >
                                    Login
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </section>

    );
}
export default Login;