import Form from 'react-validation/build/form';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty, isLowercase, isLength } from 'validator';
import { useEffect, useRef, useState } from 'react';
import AuthService from '../services/AuthService';
import { Navigate } from 'react-router-dom';




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

    const [validationMgs, setValidationMgs] = useState('')




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

    const validateAll = () => {
        const msg = {}
        if (isEmpty(email)) {
            msg.email = "Vui lòng điền email vào"
        } else if (!isEmail(email)) {
            msg.email = "Vui lòng nhập đúng định dạng @gmail.com"
        }
        if (isEmpty(password)) {
            msg.password = "Vui lòng điền mật khẩu vào"
        } else if (isLowercase(password)) {
            msg.password = "Password yêu cầu có 1 chữ cái viết hoa và tối thiểu 6 kí tự"
        } else if (isLength(password, { min: 8, max: 10 })) {
            msg.password = "Phải nhiều hơn 8 ký tự"

        }
        if (isEmpty(username)) {
            msg.username = "Vui lòng điền tên đăng nhập vào"
        }
        if (isEmpty(fullname)) {
            msg.fullname = "Vui lòng điền học và tên vào"
        }
        if (isEmpty(phone)) {
            msg.phone = "Vui lòng điền sđt vào"
        }
        setValidationMgs(msg)
        if (Object.keys(msg).length > 0) return false
        return true


    }

    const handleRegister = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);
        form.current.validateAll();
        console.log(e);
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
                }
            );
        }
        const valid = validateAll()
        if (!valid) return
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
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Đăng ký</p>

                                            <Form onSubmit={handleRegister} className="mx-1 mx-md-4" ref={form}>
                                                {!successful && (
                                                    <div>
                                                        <div className="d-flex flex-row align-items-center ">
                                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <label className="form-label" htmlFor="name">Họ và tên</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="fullname"
                                                                    value={fullname}
                                                                    onChange={onChangefullname}


                                                                />
                                                                <p
                                                                    className="tex-red-400 text-xs italic"
                                                                    style={{ fontSize: 14, fontStyle: "italic", color: "red" }}>
                                                                    {validationMgs.fullname}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center ">
                                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <label className="form-label" htmlFor="name">Tên đăng nhập</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="username"
                                                                    value={username}
                                                                    onChange={onChangeUsername}
                                                                />
                                                                <p
                                                                    className="tex-red-400 text-xs italic"
                                                                    style={{ fontSize: 14, fontStyle: "italic", color: "red" }}>
                                                                    {validationMgs.username}
                                                                </p>

                                                            </div>
                                                        </div>

                                                        <div className="d-flex flex-row align-items-center">
                                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <label className="form-label" htmlFor="eamil"> Email</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="email"
                                                                    value={email}
                                                                    onChange={onChangeEmail}


                                                                />
                                                                <p
                                                                    className="tex-red-400 text-xs italic"
                                                                    style={{ fontSize: 14, fontStyle: "italic", color: "red" }}>
                                                                    {validationMgs.email}
                                                                </p>

                                                            </div>
                                                        </div>

                                                        <div className="d-flex flex-row align-items-center ">
                                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <label className="form-label" htmlFor="password">Mật khẩu</label>
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    name="password"
                                                                    value={password}
                                                                    onChange={onChangePassword}

                                                                />
                                                                <p
                                                                    className="tex-red-400 text-xs italic"
                                                                    style={{ fontSize: 14, fontStyle: "italic", color: "red" }}>
                                                                    {validationMgs.password}
                                                                </p>

                                                            </div>
                                                        </div>

                                                        <div className="d-flex flex-row align-items-center ">
                                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                <label className="form-label" htmlFor="password">Số điện thoại</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="phone"
                                                                    value={phone}
                                                                    onChange={onChangePhone} />
                                                                <p
                                                                    className="tex-red-400 text-xs italic"
                                                                    style={{ fontSize: 14, fontStyle: "italic", color: "red" }}>
                                                                    {validationMgs.phone}
                                                                </p>

                                                            </div>
                                                        </div>



                                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary btn-lg">Đăng ký</button>
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

