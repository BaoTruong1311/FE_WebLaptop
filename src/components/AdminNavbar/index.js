import { Link } from "react-router-dom";
import "./AdminNavbar.css";

function AdminNavbar() {
    return (
        <div className="admin-navbar-wrapper">
            <div className="admin-navbar-container">
                <ul>
                    <li>
                        <Link to={"/admin/brand"}>Brand</Link>
                    </li>
                    <li>
                        <Link to={"/admin/product"}>Product</Link>
                    </li>
                    <li>
                        <Link to={"/admin/user"}>User</Link>
                    </li>
                    <li>
                        <Link to={"/admin/order"}>Order</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AdminNavbar;
