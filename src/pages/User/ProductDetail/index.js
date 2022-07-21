import "./ProductDetail.css"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductDetailDataService from "../../../services/ProductDetailService";


const product1 = Array.from({ length: 16 * 1 }, (_, i) => i)


function ProductDetail() {
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
    const [products, setProucts] = useState([])
    let { id } = useParams();
    useEffect(
        () => {
            getProductDetail(id)
        }, [products])
    const getProductDetail = (id) => {
        ProductDetailDataService.getProductDetail(id)
            .then((res) => {
                setProucts(res.data);
                console.log(res.data);
            })
            .catch((e) => console.log(e))
    }

    return (
        <div className="container product">

            <div className="flex-box">
                <div className="left">
                    <div className="big-img">
                        <img src="/assets/image/product1.jpeg" alt="" />
                    </div>
                    <div className="images">
                        <div className="small-img"><img src="/assets/image/product1.jpeg" alt="" /></div>
                        <div className="small-img"><img src="/assets/image/product1.jpeg" alt="" /></div>
                        <div className="small-img"><img src="/assets/image/product1.jpeg" alt="" /></div>
                        <div className="small-img"><img src="/assets/image/product1.jpeg" alt="" /></div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-name">
                        {products.name}
                    </div >
                    <div className="right-price">
                        {products.salePrice}
                    </div >
                    {/* <div className="right-cpu span">
                        <span>CPU:</span>
                        <span>
                            {products.config.cpu}
                        </span>
                    </div >
                    <div className="right-ram span">
                        <span>RAM:</span>
                        <span>

                            {products.config.ram}
                        </span>
                    </div >
                    <div className="right-o-cung span">
                        <span>Ổ cứng:</span>
                        <span>
                            {products.config.disk}</span>
                    </div >
                    <div className="right-hdh span">
                        <span>Hệ điều hành:</span>
                        <span>
                            {products.config.os}</span>
                    </div >
                    <div className="right-window span">
                        <span>Màn hình:</span>
                        <span>

                            {products.config.screen}</span>
                    </div >
                    <div className="right-design span">
                        <span>Thiết kế:</span>
                        <span>

                            {products.config.design}</span>
                    </div >
                    <div className="right-size span">
                        <span>Kích thước:</span>
                        <span>
                            {products.config.size}</span>
                    </div > */}
                    <button className="right-cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span>Thêm vào giỏ</span>
                    </button>
                </div>

            </div>
            <div className="bottom">
                <div className="bottom-des">
                    <p className="bottom-des-title">Thông tin sản phẩm</p>
                    <p className="bottom-des-conttent"> {products.description}</p>


                </div>
            </div>



            <div className="container container1">
                <section class="section-products">
                    <div class="container">
                        <div class="row justify-content-center text-center">
                            <div class="col-md-8 col-lg-6">
                                <div class="header">
                                    <h3>Cửa Hàng Laptop</h3>
                                    <h2>Sản Phẩm Mới</h2>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <Slider {...settings}>
                                {product1.map((produc, ind) => (
                                    <div class="">
                                        <div id="product-1" class="single-product">
                                            <div class="part-1">
                                                <img src="../../../../public/assets/image/product1.jpeg" alt="" />
                                                <ul>
                                                    <li><i class="fas fa-shopping-cart"></i></li>
                                                    <li><i class="fas fa-heart"></i></li>
                                                    <li><i class="fas fa-plus"></i></li>
                                                    <li><i class="fas fa-expand"></i></li>
                                                </ul>
                                            </div>
                                            <div class="part-2">
                                                <h3 class="product-title">Macbook Air 2017</h3>
                                                <h4 class="product-old-price">23.000.000</h4>
                                                <h4 class="product-price">21.000.000</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </Slider>

                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}
export default ProductDetail