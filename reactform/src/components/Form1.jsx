import React, { useState } from "react";
import "./Form1.css";

const Form1 = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };

    return (
        <>
            <h3
                style={{
                    textAlign: "center",
                    margin: "20px 0",
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#333",
                    lineHeight: "1.6",
                }}
            >
                My name is:{" "}
                <span style={{ color: "#007bff", fontWeight: "bold" }}>
                    {user.firstName} {user.lastName} {" "},
                </span>{" "}
                My Phone number is:{" "}
                <span style={{ color: "#007bff", fontWeight: "bold" }}>
                    {user.phoneNumber} {" "},
                </span>{" "}
                My email is:{" "}
                <span style={{ color: "#007bff", fontWeight: "bold" }}>
                    {user.email} {" "},
                </span>
            </h3>

            <div className="form-container">
                <h2>Registration Form</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" name="firstName" value={user.firstName} required onChange={handleInput} />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" name="lastName" value={user.lastName} required onChange={handleInput} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" value={user.email} required onChange={handleInput} />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <div style={{ position: "relative" }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={user.password}
                                required
                                onChange={handleInput}
                                style={{ paddingRight: "30px" }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: "absolute",
                                    right: "5px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
                                {showPassword ? "👁️" : "🙈"}
                            </button>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input type="tel" name="phoneNumber" value={user.phoneNumber} required onChange={handleInput} />
                    </div>
                    <button type="submit" className="form-button">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Form1;
