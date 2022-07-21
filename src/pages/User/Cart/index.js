import "./Cart.css"
import { useState } from "react"
import { Link } from "react-router-dom"
function Cart() {
    const [count, setCount] = useState(1)
    return (
        <div className="container cart">
            <div className="cart-top">
                <p>Giỏ hàng</p>
            </div>
            <div className="cart-bottom">
                <div className="cart-bottom-right">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Sản phẩm</th>
                                <th scope="col">giá</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Sản phẩm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span><img src="../../../../public/assets/image/product1.jpeg" alt="" /></span>
                                    <span>Laptop Asus VivoBook X509MA N5030/4GB/512GB/Win10 (EJ256T).</span>
                                </td>
                                <td>	9.890.000đ</td>
                                <td>
                                    <div className="btn">
                                        <button onClick={() => setCount(count - 1)}>-</button>
                                        <span>{count}</span>
                                        <button onClick={() => setCount(count + 1)}>+</button>
                                    </div>
                                </td>
                                <td>
                                    <span>	9.890.000đ</span>
                                    <span>&times;</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <span><img src="../../../../public/assets/image/product1.jpeg" alt="" /></span>
                                    <span>Laptop Asus VivoBook X509MA N5030/4GB/512GB/Win10 (EJ256T)</span>
                                </td>
                                <td>	9.890.000đ</td>
                                <td>
                                    <div className="btn">
                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </div>
                                </td>
                                <td>
                                    <span>	9.890.000đ</span>
                                    <span>&times;</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="cart-bottom-left">
                    <div className="cart-bottom-left-content">
                        <p className="cart-bottom-left-content-tilte">Thông tin giỏ hàng</p>
                        <div className="cart-bottom-left-content-sum">
                            <span>Tổng số sản phẩm:</span>
                            <span>1</span>
                        </div>
                        <div className="cart-bottom-left-content-delivery">
                            <p>Chọn đơn vị giao hàng</p>
                            <div className="cart-bottom-left-content-delivery-top">
                                <input type="radio" />{"Giao hàng tiết kiệm: "}
                                <span>20.000 đ</span>
                            </div>
                            <div className="cart-bottom-left-content-delivery-bottom">
                                <input type="radio" />{"Viettel Post: "}
                                <span>20.000 đ</span>
                            </div>
                        </div>
                        <div className="cart-bottom-left-content-total">
                            <span>Tổng cộng</span>
                            <span>9,890,000đ</span>
                        </div>
                        <Link to={`/oder`}> <button>Đặt hàng</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart