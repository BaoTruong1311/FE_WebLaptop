import { Link } from "react-router-dom"
import "./Oder.css"
function Oder() {
    return (
        <div className="container oder">
            <div className="oder-top">
                ĐẶT HÀNG
            </div>
            <div className="oder-item">
                <div className="oder-item-left">
                    <div className="oder-item-top">Số điện thoại  </div>
                    <div className="oder-item-top">
                        <input type="text" />
                    </div>
                    <div className="oder-item-top">
                        <div className=" oder-item-top-c">
                            <div className="oder-item-top-content">Tỉnh / Thành phố *</div>
                            <div className="oder-item-top-content">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Tỉnh / Thành phố</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select></div>
                            <div className="oder-item-top-content">Phường xã / Thị trấn *</div>
                            <div className="oder-item-top-content">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Phường xã / Thị trấn</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                        </div>
                        <div className=" oder-item-top-c">
                            <div className="oder-item-top-content">
                                <div className="oder-item-top-content">Quận / Huyện *</div>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Quận / Huyện *</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="oder-item-top-content">Chi tiết *</div>
                            <div className="oder-item-top-content">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Chi tiết *</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="oder-item-top">Ghi chú (nếu có) </div>
                    <div className="oder-item-top">
                        <textarea name="" id="" cols="30" rows="5"></textarea>
                    </div>

                </div>
                <div className="order-item-right">
                    <div className="order-item-right-content"> Đơn hàng của tôi</div>
                    <hr />
                    <div className="order-item-right-content">
                        <div>
                            Sản phẩm</div>
                        <div>Tổng cộng

                        </div>
                    </div>

                    <div className="order-item-right-content" >
                        <div className="text"> Laptop Asus VivoBook X509MA N:</div>
                        <div>	9.890.000đ</div>
                    </div>
                    <hr />
                    <div className="order-item-right-content">
                        <div>Vận chuyển:</div>
                        <div>	Miễn phí</div>
                    </div>
                    <hr />
                    <div className="order-item-right-content">
                        <div>Tổng cộng:</div>
                        <div>	0đ</div>
                    </div>
                    <Link to={`/oderdetail`}><button>Đặt hàng</button></Link>
                </div>
            </div>
        </div>
    )

}
export default Oder