import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import BrandDataServices from "../../../../services/BrandService"
import "./Header.css"
function Header() {

    const [dropdown, setDropdown] = useState(false)
    const [brand, setBrand] = useState([])
    const handleDropdown = () => {
        setDropdown(!dropdown)
    }
    useEffect(() => {
        getAllBrand();
    }, [])
    const getAllBrand = () => {
        BrandDataServices.getAllBrands()
            .then((res) => {
                setBrand(res.data);
            })
            .catch((e) => console.log(e));
    }

    return (

        <div className="header">
            <div className="container header-infor">
                <div className="header-infor-sdt">SĐT: 0337724086</div>
                <div className="header-infor-log">
                    <div className="header-infor-log-login">Đăng nhập</div>
                    <div className="heder-infor-log-register">Đăng ký</div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light navbar navbar-dark bg-dark">
                <div className="container">
                    <Link to={`/`}>
                        <p class="navbar-brand slogan " href="#">Kool-Pan</p></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <p class="nav-link" href="#">Trang chủ <span class="sr-only">(current)</span></p>
                            </li>
                            <li class="nav-item dropdown">

                                <div class="dropdown">
                                    <button
                                        onClick={handleDropdown}
                                        class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Thương Hiệu
                                    </button>
                                </div>
                            </li>

                            <li class="nav-item">
                                <p class="nav-link" href="#">Dịch Vụ</p>

                            </li>

                            <li class="nav-item">
                                <p class="nav-link disabled" href="#">Liên Hệ</p>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn btn-info " type="submit">Search</button>
                        </form>
                        <div className="cart-header">
                            <div className="cart-header-icon">
                                <Link to={`/cart`}>   <i style={{ cursor: "pointer" }} class="fas fa-shopping-cart"></i></Link></div>
                            <div className="cart-header-count">1</div>
                        </div>
                    </div>

                </div >
            </nav >
            {
                dropdown && <ul class="dropdown-menu-customer" aria-labelledby="dropdownMenuButton1">
                    {brand.map((brand) => (
                        <Link to={`/categorys/${brand.id}`}><p class="dropdown-item-customer" onClick={handleDropdown}>{brand.name}{brand.id} </p></Link>
                    ))}


                </ul>
            }
        </div>

    )
}
export default Header