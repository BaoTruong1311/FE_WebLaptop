import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';
import { useState } from 'react';
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
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [validationMgs, setValidationMgs] = useState({})

    const onChangeName = (e) => {
        const value = e.target.value
        setName(value)
    }
    const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }
    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }
    const validationAll = () => {
        const mgs = {}
        if (isEmpty(email)) {
            mgs.email = 'Please input your Email'
        } else if (!isEmail(email)) {
            mgs.email = 'Your Email is incorrect'
        }
        if (isEmpty(name)) {
            mgs.name = 'Please input your Name'
        }
        if (isEmpty(password)) {
            mgs.password = 'please input your Password'
        }
        setValidationMgs(mgs)
        if (Object.keys(mgs).length > 0) return false
        return true

    }
    const onSubmitRegister = () => {
        const isValid = validationAll()
        if (!isValid) return

    }
    const handleRegister = () => {

    }
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

                                            <Form onSubmit={handleRegister} className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <p className="tex-red-400 text-xs italic" style={{ fontSize: 14, fontStyle: "italic", color: "red" }}>{validationMgs.name}</p>
                                                        <input
                                                            type="name"
                                                            id="name"
                                                            name="name"
                                                            autoComplete='name'
                                                            className="form-control"
                                                            onChange={onChangeName}
                                                            validations={[required, vusername]}
                                                        />
                                                        <label className="form-label" for="name">Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <p className="tex-red-400 text-xs italic" style={{ fontSize: 14, fontStyle: "italic", color: "red" }}>{validationMgs.email}</p>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            className="form-control"
                                                            autoComplete='email'
                                                            onChange={onChangeEmail}

                                                        />
                                                        <label className="form-label" for="eamil">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <p className="tex-red-400 text-xs italic" style={{ fontSize: 14, fontStyle: "italic", color: "red" }}>{validationMgs.password}</p>
                                                        <input
                                                            type="password"
                                                            id="password"
                                                            name="password"
                                                            onChange={onChangePassword}
                                                            validations={[required, vpassword]}
                                                            className="form-control" />
                                                        <label className="form-label" for="password">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <p className="tex-red-400 text-xs italic" style={{ fontSize: 14, fontStyle: "italic", color: "red" }}>{validationMgs.password}</p>
                                                        <input
                                                            type="password"
                                                            id="password"
                                                            name="password"
                                                            onChange={onChangePassword}
                                                            className="form-control" />

                                                        <label className="form-label" for="password">Repeat your password</label>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                    <label className="form-check-label" for="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary btn-lg"
                                                        onClick={onSubmitRegister}
                                                    >Register</button>
                                                </div>

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