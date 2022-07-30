import Form from 'react-validation/build/form';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';
import { useEffect, useRef, useState } from 'react';
import AuthService from '../services/AuthService';
import { Navigate } from 'react-router-dom';
const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};
const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};
function Register() {
    //huy
    const form = useRef();
    const checkBtn = useRef();
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");



    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            Navigate("/");

        }
    }, []);
    const onChangefullname = (e) => {
        const fullname = e.target.value;
        setFullname(fullname);
    };

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangePhone = (e) => {
        const phone = e.target.value;
        setPhone(phone);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            const user = {
                fullname,
                username,
                password,
                email,
                phone,
                role: ["user"],
            };
            console.log(fullname, username, password, email, phone);
            AuthService.register(user).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }
    };
    return (
        <div className='container' style={{ paddingTop: 200, paddingBottom: 100, backgroundColor: "#eee" }}>
            <section className="vh-100" >
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

                                            <Form onSubmit={handleRegister} className="mx-1 mx-md-4" ref={form}>
                                                {!successful && (
                                                    <div>
                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <label className="form-label" htmlFor="name">Fullname</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="fullname"
                                                                    value={fullname}
                                                                    onChange={onChangefullname}
                                                                    validations={[required]}

                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="username"
                                                                    value={username}
                                                                    onChange={onChangeUsername}
                                                                    validations={[required, vusername]}

                                                                />
                                                                <label className="form-label" htmlFor="name">Username</label>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">

                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="email"
                                                                    value={email}
                                                                    onChange={onChangeEmail}
                                                                    validations={[required, validEmail]}

                                                                />
                                                                <label className="form-label" htmlFor="eamil">Your Email</label>
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
                                                                    validations={[required, vpassword]}
                                                                />
                                                                <label className="form-label" htmlFor="password">Password</label>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="phone"
                                                                    value={phone}
                                                                    onChange={onChangePhone} />
                                                                <label className="form-label" htmlFor="password">Phone</label>
                                                            </div>
                                                        </div>

                                                        <div className="form-check d-flex justify-content-center mb-5">
                                                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                            <label className="form-check-label" htmlFor="form2Example3">
                                                                I agree all statements in <a href="#!">Terms of service</a>
                                                            </label>
                                                        </div>

                                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary btn-lg">Register</button>
                                                        </div>
                                                    </div>
                                                )}
                                                {message && (
                                                    <div className="form-group">
                                                        <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
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
export default Register

