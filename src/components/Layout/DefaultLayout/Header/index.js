import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../../../services/AuthService"
import BrandDataServices from "../../../../services/BrandService"
import CartService from "../../../../services/CartService";
import ProductDetailDataService from "../../../../services/ProductDetailService";
import "./Header.css"
function Header() {
    let navigate = useNavigate();
    const [dropdown, setDropdown] = useState(false)
    const [brand, setBrand] = useState([])
    const handleDropdown = () => {
        setDropdown(!dropdown)
    }


    const [currentUser, setCurrentUser] = useState(() =>
        AuthService.getCurrentUser(),

    );



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



    const logOut = () => {
        AuthService.logout();
        navigate("/login")
        window.location.reload();
    }





    // search
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [product, setProduct] = useState([])
    // useEffect(() => {
    //     getAll();


    // }, [])
    const getAll = () => {
        ProductDetailDataService.getAll()
            .then((res) => {
                setProduct(res.data);
            })

    }
    const filtered = product.filter((dt) =>
        dt.name.toLowerCase().includes(searchValue.toLowerCase())

    );
    const focusResult = () => {
        setShowResult(false);
    }
    const focusInput = () => {
        setShowResult(true);
        setSearchResult([1])
    }


    //cart
    const [count, setCount] = useState(0)
    const [cart, setCart] = useState([])
    const getCart = () => {
        CartService.getCart().then((res) => {
            setCart(res.data.cartItems)


        })
    }
    useEffect(() => {
        getCart();

    })
    return (

        <div className="header">
            <div className="container header-infor">
                <div className="header-infor-sdt">SĐT: 0337724086</div>
                {(currentUser ? (<div className="header-infor-log">

                    <div className="heder-infor-log-register">{currentUser.username}</div>
                    <div className="header-infor-log-login" onClick={logOut}>Đăng xuất</div>

                </div>) : (
                    <div className="header-infor-log">
                        <Link to={`/login`}> <div className="header-infor-log-login" >Đăng nhập</div>

                        </Link>
                        <Link to={`/register`}> <div className="heder-infor-log-register">Đăng ký</div>  </Link>
                    </div>))}
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
                                <Link to={`/`}>
                                    <p class="nav-link" href="#">Trang chủ <span class="sr-only">(current)</span></p>

                                </Link>
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
                        <form class="form-inline my-2 my-lg-0 search">
                            <input class="form-control mr-sm-2"
                                type="search" placeholder="Search"
                                aria-label="Search"
                                onChange={(e) => setSearchValue(e.target.value)}
                                value={searchValue}
                                onFocus={focusInput}

                            />
                            <button class="btn btn btn-info " type="submit">Search</button>

                        </form>
                        <div className="cart-header">
                            <div className="cart-header-icon">
                                <Link to={`/cart`}>   <i style={{ cursor: "pointer" }} class="fas fa-shopping-cart"></i></Link></div>
                            <div className="cart-header-count">{count + cart.length}</div>
                        </div>
                    </div>

                </div >
            </nav >
            {
                dropdown && <ul class="dropdown-menu-customer" aria-labelledby="dropdownMenuButton1">
                    {brand.map((brand) => (
                        <Link to={`/categorys/${brand.id}`}><p class="dropdown-item-customer" onClick={handleDropdown}>{brand.name}</p></Link>
                    ))}
                </ul>
            }



            {showResult && searchResult.length > 0 &&
                <div className="search-item">
                    {filtered.map((produc) => (
                        <Link to={`/productdetail/${produc.id}`}>
                            <div className="result" onClick={focusResult}>
                                <div className="result-image">
                                    <img
                                        src={`/assets/image2/${produc.imageLink1}`}
                                        alt="Not found"
                                    />
                                </div>
                                <div className="result-title">
                                    <div className="result-title-name">{produc.name}</div>

                                </div>

                            </div>
                        </Link>
                    ))}




                </div>



            }







        </div>

    )
}
export default Header