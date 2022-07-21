

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import "./AdminHeader.css";

function AdminHeader() {
    let navigate = useNavigate();
    const [showAction, setShowAction] = useState(false);

    const handleLogout = () => {
        AuthService.logout();
        navigate("/login");
    };

    return (
        <header className="navbar-wrapper-adminHeader">
            <div className="navbar-container-adminHeader">
                <div className="navbar-logo-adminHeader">
                    <Link to="/">
                        <h3>Kool-Pan</h3>
                    </Link>
                </div>
                <div className="navbar-search-adminHeader">
                    <input
                        className="navbar-search-input-adminHeader"
                        type="text"
                        placeholder="Từ khóa tìm kiếm..."
                    />

                </div>
                <div className="navbar-user-adminHeader">
                    <img
                        className="navbar-user-img-adminHeader"
                        src="https://moveek.com/bundles/ornweb/img/no-avatar.png"
                        alt="user"
                        onClick={() => {
                            setShowAction(!showAction);
                        }}
                    />
                    {showAction === true && (
                        <ul className="navbar-user-action-adminHeader">
                            <li className="navbar-user-action-items-adminHeader">
                                Trang cá nhân
                            </li>
                            <li
                                className="navbar-user-action-items-adminHeader"
                                onClick={handleLogout}
                            >
                                Đăng xuất
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
}

export default AdminHeader;
