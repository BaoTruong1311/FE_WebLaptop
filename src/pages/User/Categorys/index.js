import "./Categorys.css"
import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import CategoryDataService from "../../../services/CategoryServices"
import { useEffect } from "react"
function Categorys() {
    const [products, setProucts] = useState([])
    let { id } = useParams();
    useEffect(() => {
        getCategoryById(id)
    }, [products])
    const getCategoryById = (id) => {
        CategoryDataService.getCategoryById(id)
            .then((res) => {
                setProucts(res.data);
            })
            .catch((e) => console.log(e))

    }

    const handleCategory1 = () => {
        CategoryDataService.getProductBy5To10()
            .then((res) => {
                setProucts(res.data)
                console.log(res.data);
            })
            .catch((e) => console.log(e))
    }
    const handleCategory2 = () => {
        CategoryDataService.getProductBy10To20()
            .then((res) => {
                setProucts(res.data)
                console.log(res.data);
            })
            .catch((e) => console.log(e))
    }
    const handleCategory3 = () => {
        CategoryDataService.getProductByUnder20()
            .then((res) => {
                setProucts(res.data)
                console.log(res.data);
            })
            .catch((e) => console.log(e))
    }
    return (
        <>

            <div className="container category">
                <div className="category-right">
                    <div className="category-right-trademark">
                        <div className="category-right-trademark-top">
                            Thương Hiệu
                        </div>
                        <div className="category-right-trademark-item">
                            <p> <input type="checkbox" />{"Macbook"}</p>
                            <p>   <input type="checkbox" />{"Acer"}</p>
                            <p> <input type="checkbox" />{"Asus"}</p>
                            <p>   <input type="checkbox" />{"Dell"}</p>
                            <p>   <input type="checkbox" />{"Hp"}</p>
                            <p>   <input type="checkbox" />{"Lenovo"}</p>

                        </div>
                    </div>
                    <div className="category-right-price">
                        <div className="category-right-price-top">Giá</div>
                        <div className="category-right-price-item">
                            <p><input type="checkbox"
                                onClick={handleCategory1}

                            />{"từ 5 triệu đến 10 triệu"}</p>
                            <p>  <input type="checkbox"
                                onClick={handleCategory2}
                            />{"từ 10 triệu đến 20 triệu"}</p>
                            <p>  <input type="checkbox"
                                onClick={handleCategory3}
                            />{"trên 20 triệu"}</p>
                        </div>
                        <button>Áp dụng</button>
                    </div>
                </div>
                <div className="category-left">
                    <div className="category-left-tilte"> Danh sách sản phẩm</div>
                    <div className="category-left-product">
                        <div className="container container3">
                            <section class="section-products">
                                <div class="container">

                                    <div class="row">


                                        {products.map((produc, ind) => (
                                            <div class="col-md-6 col-lg-4 col-xl-3">
                                                <div id="product-1" class="single-product">
                                                    <div class="part-1">
                                                        {/* <img src={require(`../../../assets/image-product/${produc.image}`)} alt="" /> */}
                                                        <img src="../../../assets/image-product/:upload:2022:7:636330306635691141_800-1.jpg" alt="" />

                                                        <ul>
                                                            <li>  <Link to={`/cart`}>   <i style={{ cursor: "pointer" }} class="fas fa-shopping-cart"></i></Link></li>

                                                        </ul>
                                                    </div>
                                                    <div class="part-2">
                                                        <h3 class="product-title">{produc.name}</h3>
                                                        <h4 class="product-price">{produc.originalPrice}</h4>
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

            </div >

        </>
    )

}
export default Categorys