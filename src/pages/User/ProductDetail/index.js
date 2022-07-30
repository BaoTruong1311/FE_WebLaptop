import "./ProductDetail.css"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductDetailDataService from "../../../services/ProductDetailService";
import AuthService from "../../../services/AuthService";
import CartService from "../../../services/CartService";


function ProductDetail() {
    const [products, setProucts] = useState([])
    const [arlet, setArlet] = useState(false)
    let { id } = useParams();
    useEffect(
        () => {
            getProductDetail(id)
        }, [])
    const getProductDetail = (id) => {
        ProductDetailDataService.getProductDetail(id)
            .then((res) => {
                setProucts(res.data);
                localStorage.setItem("cart", JSON.stringify(res.data))
            })
    }

    const currentUser = AuthService.getCurrentUser();
    console.log(currentUser);


    console.log(arlet);
    const showArlet = () => {
        currentUser === null
            ?
            setArlet(true)
            :
            console.log();
    }
    const handleAddCart = (id) => {
        CartService.addCart(id)
            .then((res) => {
                console.log(id);
                console.log(res.data.message);
                console.log(res.data.status);

            })

    }
    return (
        <div className="container product">

            <div className="flex-box">
                <div className="left">
                    <div className="big-img">
                        <img src={`/assets/image2/${products.imageLink1}`} alt="" />
                    </div>
                    <div className="images">
                        <div className="small-img"> <img src={`/assets/image2/${products.imageLink1}`} alt="" /></div>
                        <div className="small-img"> <img src={`/assets/image2/${products.imageLink2}`} alt="" /></div>
                        <div className="small-img"> <img src={`/assets/image2/${products.imageLink3}`} alt="" /></div>
                        <div className="small-img"> <img src={`/assets/image2/${products.imageLink1}`} alt="" /></div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-name">
                        {products.name}
                    </div >
                    <div className="right-price">
                        {products.salePrice}
                    </div >

                    <div className="right-cpu span">
                        <span>CPU:</span>
                        <span>
                            {products.cpu}
                        </span>
                    </div >
                    <div className="right-ram span">
                        <span>RAM:</span>
                        <span>

                            {products.ram}
                        </span>
                    </div >
                    <div className="right-o-cung span">
                        <span>Ổ cứng:</span>
                        <span>
                            {products.disk}</span>
                    </div >
                    <div className="right-hdh span">
                        <span>Hệ điều hành:</span>
                        <span>
                            {products.os}</span>
                    </div >
                    <div className="right-window span">
                        <span>Màn hình:</span>
                        <span>

                            {products.screen}</span>
                    </div >
                    <div className="right-design span">
                        <span>Thiết kế:</span>
                        <span>

                            {products.design}</span>
                    </div >
                    <div className="right-size span">
                        <span>Kích thước:</span>
                        <span>
                            {products.size}</span>
                    </div >

                    <button className="right-cart"
                        onClick={() => { handleAddCart(products.id) }}>
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span onClick={showArlet}>Thêm vào giỏ</span>

                    </button>
                    {arlet &&
                        <div className="arlet">
                            <p>Bạn cần phải đăng nhập</p>
                        </div>
                    }
                </div>


            </div>
            <div className="bottom">
                <div className="bottom-des">
                    <p className="bottom-des-title">Thông tin sản phẩm</p>
                    <p className="bottom-des-conttent"> {products.description}</p>

                </div>
            </div>




        </div>
    )
}
export default ProductDetail