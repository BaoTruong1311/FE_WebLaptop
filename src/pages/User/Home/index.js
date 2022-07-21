
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import ProductDataServices from "../../../services/HomeService";
import { useEffect, useState } from "react";



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
    useEffect(() => {
        getAllProduct();
    }, [])
    const getAllProduct = () => {
        ProductDataServices.getProductList()
            .then((res) => {
                setProduct(res.data);
            })
            .catch((e) => console.log(e));
    }

    return (

        <div className="height">

            {/* background */}
            <div className="background">
                <img src="/assets/image/background1.jpg" alt="day la anh" />
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
                                        <div class="">
                                            <div id="product-1" class="single-product">
                                                <div class="part-1">
                                                    <Link to={`/productdetail/${produc.id}`}>
                                                        <img style={{ cursor: "pointer" }} src="/assets/image-product/:upload:2022:7:636330306635691141_800-1.jpg" alt="" /></Link>
                                                    <ul>
                                                        <li>  <Link to={`/cart`}>   <i style={{ cursor: "pointer" }} class="fas fa-shopping-cart"></i></Link></li>
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
                                        <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div id="product-1" class="single-product">
                                                <div class="part-1">
                                                    <Link to={`/productdetail`}>
                                                        <img style={{ cursor: "pointer" }} src="/assets/image/product1.jpeg" alt="" /></Link>
                                                    <ul>
                                                        <li>  <Link to={`/cart`}>   <i style={{ cursor: "pointer" }} class="fas fa-shopping-cart"></i></Link></li>
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
                                {product.map((produc, ind) => (
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div id="product-1" class="single-product">
                                            <div class="part-1">
                                                <img src="/assets/image/product1.jpeg" alt="" />
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
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Home