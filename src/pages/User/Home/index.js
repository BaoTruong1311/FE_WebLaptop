
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthService from "../../../services/AuthService";
import ReactPaginate from "react-paginate";
import ProductListData from "../../../services/ProductListService";



function Home() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [product, setProduct] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();
        if (currentUser) {
            if (currentUser.roles.includes("ROLE_ADMIN")) {
                navigate("/admin/brand");

            }
        }
    }, []);

    useEffect(() => {
        getProductList();
    }, [])
    const getProductList = () => {
        ProductListData.getProductList().then((res) => {
            setProduct(res.data.content)
        })
    }


    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;



    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(product.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(product.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, product]);

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % product.length;
        setItemOffset(newOffset);
    }

    return (

        <div className="height">

            {/* background */}
            <div className="background">
                <img
                    src="/assets/image/background1.jpg"
                    alt="Not found"
                />

                <h2>KooL-PaN</h2>
                <h4>Đem Laptop đến với mọi người</h4>
                {/* <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Mua Ngay
                </button> */}
            </div>
            <div className="container-product">
                {/* sản phẩm mới  */}
                <div className="container container1">
                    <section class="section-products">
                        <div class="container">
                            <div class="row justify-content-center text-center">
                                <div class="col-md-8 col-lg-6">
                                    <div class="header-section">
                                        <h3>Cửa Hàng Laptop</h3>
                                        <h2>Sản Phẩm Mới</h2>
                                    </div>


                                </div>
                            </div>

                            <div class="row">
                                <Slider {...settings}>
                                    {product.map((produc, ind) => (
                                        <div class="" key={{ ind }}>
                                            <div id="product-1" class="single-product">
                                                <div class="part-1">
                                                    <Link to={`/productdetail/${produc.id}`}>
                                                        <img src={`/assets/image2/${produc.imageLink1}`} alt="" />
                                                    </Link>

                                                    <ul>
                                                        <li>  <Link to={`/cart`}>   <i style={{ cursor: "pointer" }} class="fas fa-shopping-cart"></i></Link></li>
                                                        <li><i class="fas fa-heart"></i></li>
                                                        <li><i class="fas fa-plus"></i></li>
                                                        <li><i class="fas fa-expand"></i></li>
                                                    </ul>
                                                </div>
                                                <div class="part-2">
                                                    <Link to={`/productdetail/${produc.id}`}>
                                                        <h3 class="product-title">{produc.name}</h3>
                                                        <h4 class="product-old-price">{produc.originalPrice}</h4>
                                                        <h4 class="product-price">{produc.salePrice}</h4>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </Slider>

                            </div>

                        </div>
                    </section>
                </div>
                {/* sản phẩm nổi bật */}
                <div className="container container2">
                    <section class="section-products">
                        <div class="container">
                            <div class="row justify-content-center text-center">
                                <div class="col-md-8 col-lg-6">
                                    <div class="header-section">
                                        <h3>Cửa Hàng Laptop</h3>
                                        <h2>Sản Phẩm Nổi Bật</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <Slider {...settings}>
                                    {product.map((produc, ind) => (
                                        <div class="" key={{ ind }}>
                                            <div id="product-1" class="single-product">
                                                <div class="part-1">
                                                    <Link to={`/productdetail/${produc.id}`}>
                                                        <img src={`/assets/image2/${produc.imageLink1}`} alt="" />
                                                    </Link>

                                                    <ul>
                                                        <li>  <Link to={`/cart`}>   <i style={{ cursor: "pointer" }} class="fas fa-shopping-cart"></i></Link></li>
                                                        <li><i class="fas fa-heart"></i></li>
                                                        <li><i class="fas fa-plus"></i></li>
                                                        <li><i class="fas fa-expand"></i></li>
                                                    </ul>
                                                </div>
                                                <div class="part-2">
                                                    <Link to={`/productdetail/${produc.id}`}>
                                                        <h3 class="product-title">{produc.imageLink2}</h3>
                                                        <h4 class="product-old-price">{produc.originalPrice}</h4>
                                                        <h4 class="product-price">{produc.salePrice}</h4>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </Slider>

                            </div>
                        </div>
                    </section>
                </div>
                {/* gợi ý cho bạn */}
                <div className="container container3">
                    <section class="section-products">
                        <div class="container">
                            <div class="row justify-content-center text-center">
                                <div class="col-md-8 col-lg-6">
                                    <div class="header-section">
                                        <h3>Cửa Hàng Laptop</h3>
                                        <h2>Sản Phẩm gợi ý</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                {currentItems.map((produc, ind) => (
                                    <div class="col-md-6 col-lg-4 col-xl-3" key={{ ind }}>
                                        <div id="product-1" class="single-product">
                                            <div class="part-1">
                                                <img src={`/assets/image2/${produc.imageLink1}`} alt="" />
                                                <ul>
                                                    <li><i class="fas fa-shopping-cart"></i></li>
                                                    <li><i class="fas fa-heart"></i></li>
                                                    <li><i class="fas fa-plus"></i></li>
                                                    <li><i class="fas fa-expand"></i></li>
                                                </ul>
                                            </div>
                                            <div class="part-2">
                                                <h3 class="product-title">{produc.name}</h3>
                                                <h4 class="product-old-price">{produc.originalPrice}</h4>
                                                <h4 class="product-price">{produc.salePrice}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}



                            </div>
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel=" >"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                previousLabel="< "
                                renderOnZeroPageCount={null}
                                containerClassName="pagination"
                                pageClassName="page-num"
                                previousLinkClassName="page-num"
                                nextLinkClassName="page-num"
                                activeLinkClassName="active"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Home