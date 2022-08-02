import "./Cart.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CartService from "../../../services/CartService"
import AuthService from "../../../services/AuthService"
function Cart() {
    const [count, setCount] = useState(1)

    const [currentUser, setCurrentUser] = useState(() =>
        AuthService.getCurrentUser(),
    );
    const [cart, setCart] = useState([])
    const getCart = () => {
        CartService.getCart().then((res) => {
            setCart(res.data.cartItems)
            console.log("Cart", res.data.cartItems);
        })
    }
    const [total, setTotal] = useState([])
    const getTotal = () => {
        CartService.getCart().then((res) => {
            setTotal(res.data.totalCost)
            console.log("totalss", res.data.totalCost);
        })
    }


    useEffect(() => {
        getCart();

    }, [])
    useEffect(() => {
        getTotal();
    }, [])
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

                            </tr>
                        </thead>
                        {cart.map((c, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td>
                                        <span><img src={`/assets/image2/${c.product.imageLink1}`} alt="" /></span>
                                        <span>{c.product.name}</span>
                                    </td>
                                    <td>	{c.product.originalPrice}</td>
                                    <td>
                                        <div className="btn">
                                            <button onClick={() => setCount(count - 1)}>-</button>
                                            <span>{count}</span>
                                            <button onClick={() => setCount(count + 1)}>+</button>
                                        </div>
                                    </td>

                                </tr>

                            </tbody>
                        ))}

                    </table>
                </div>
                <div className="cart-bottom-left">
                    <div className="cart-bottom-left-content">
                        <p className="cart-bottom-left-content-tilte">Thông tin giỏ hàng</p>
                        <div className="cart-bottom-left-content-sum">
                            <span>Tổng số sản phẩm:</span>
                            {(currentUser ? (<span>{cart.length}</span>) :
                                <span>{0}</span>)}
                        </div>
                        <div className="cart-bottom-left-content-delivery">
                            <p>Chọn đơn vị giao hàng</p>
                            <div className="cart-bottom-left-content-delivery-top">
                                <input type="radio" checked="checked" />{"Giao hàng tiết kiệm: "}
                                <span>20.000 đ</span>
                            </div>
                            <div className="cart-bottom-left-content-delivery-bottom">
                                <input type="radio" />{"Viettel Post: "}
                                <span>20.000 đ</span>
                            </div>
                        </div>
                        <div className="cart-bottom-left-content-total">
                            <span>Tổng cộng</span>
                            <span>{total}</span>


                        </div>
                        <Link to={`/oder`}> <button>Đặt hàng</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart