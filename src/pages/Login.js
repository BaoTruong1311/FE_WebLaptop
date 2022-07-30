/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/AuthService";
const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a empty.
            </div>
        );
    }
};

function Login() {
    let navigate = useNavigate();
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            navigate("/");
        }
    }, []);

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(username, password).then(
                (res) => {
                    navigate("/");
                }
            );
        } else {
            setLoading(false);
        }
    };

    return (
        <div className='container' style={{ paddingTop: 100, backgroundColor: "#eee" }}>
            <section className="vh-100" >
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

                                            <Form onSubmit={handleLogin} ref={form}>

                                                <div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="username"
                                                                value={username}
                                                                onChange={onChangeUsername}
                                                                validations={[required]}

                                                            />
                                                            <label className="form-label" htmlFor="name">Username</label>
                                                        </div>
                                                    </div>



                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                name="password"
                                                                value={password}
                                                                onChange={onChangePassword}
                                                                validations={[required]}
                                                            />
                                                            <label className="form-label" htmlFor="password">Password</label>
                                                        </div>
                                                    </div>



                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">

                                                        <button className="btn btn-primary btn-block" disabled={loading}>
                                                            {loading && (
                                                                <span className="spinner-border spinner-border-sm"></span>
                                                            )}
                                                            <span>Login</span>
                                                        </button>
                                                    </div>
                                                </div>

                                                {message && (
                                                    <div className="form-group">
                                                        <div className="alert alert-danger" role="alert">
                                                            {message}
                                                        </div>
                                                    </div>
                                                )}
                                                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                                            </Form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;
