import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import AdressService from "../../../services/AdressService"
import CartService from "../../../services/CartService"
import OderDataService from "../../../services/OrderService"
import "./Oder.css"
function Oder() {
    const [country, setCountry] = useState([])
    const [contryid, setContryid] = useState('')
    const [distric, setDistric] = useState([])
    const [districid, setDistricid] = useState('')
    const [village, setVillage] = useState([])
    const [villageid, setVillageid] = useState('')
    const getCountry = () => {
        AdressService.getProvince()
            .then((res) => {
                setCountry(res.data)
                console.log("province", res.data);
            })
    }
    useEffect(() => {
        getCountry()

    }, [])
    const handleCountry = (e) => {
        const getcontryid = Number(e.target.value);
        setContryid(getcontryid)
    }
    const getDistric = (contryid) => {
        AdressService.getDistrict(contryid)
            .then((res) => {
                setDistric(res.data)
                console.log("distric", res.data);
            })
    }
    useEffect(() => {
        getDistric(contryid)
    }, [contryid])
    const handleDistrict = (e) => {
        const getdistrictid = Number(e.target.value);
        setDistricid(getdistrictid)
    }
    const getVillage = (districid) => {
        AdressService.getVillage(districid)
            .then((res) => {
                setVillage(res.data)
            })
    }
    const handleVillage = (e) => {
        const getvillageid = Number(e.target.value);
        setVillageid(getvillageid)
    }
    useEffect(() => {
        getVillage(districid)
    }, [districid])

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

    const [order, setOrder] = useState([])
    const [sdt, setSdt] = useState('')
    const [number, setNumber] = useState('')
    const [note, setNote] = useState('')
    let navigate = useNavigate()

    const handleSubmit = () => {
        const adress = {
            "phone": sdt,
            "note": note,
            "adress": {
                "detail": number,
                "province": {
                    "id": contryid,
                },
                "district": {
                    "id": districid,
                },
                "village": {
                    "id": villageid,
                }
            }

        }
        console.log("adress", adress);

        OderDataService.postOder(adress).then((res) => {
            console.log(res.status);
            console.log(res.message);
        })
        // alert(`Bạn đã đặt hàng thành công`)
        // navigate("/orderdetail")


    }
    return (
        <div className="container oder">
            <div className="oder-top">
                ĐẶT HÀNG
            </div>
            <div className="oder-item">
                <div className="oder-item-left">
                    <div className="oder-item-top">Số điện thoại  </div>
                    <div className="oder-item-top">
                        <input type="sdt"
                            value={sdt}
                            onChange={e => { setSdt(e.target.value) }}
                        />

                    </div>
                    <div className="oder-item-top">
                        <div className=" oder-item-top-c">
                            <div className="oder-item-top-content">Tỉnh / Thành phố *</div>
                            <div className="oder-item-top-content">
                                <select
                                    class="form-select"
                                    aria-label="Default select example"
                                    onChange={(e) => handleCountry(e)}
                                >
                                    <option selected>Tỉnh / Thành phố</option>
                                    {country.map((c, index) => (
                                        <option key={index} value={c.id} >{c.name}</option>
                                    ))}

                                </select></div>
                            <div className="oder-item-top-content">Phường xã / Thị trấn *</div>
                            <div className="oder-item-top-content">
                                <select
                                    class="form-select"
                                    aria-label="Default select example"
                                    onChange={(e) => handleVillage(e)}
                                >
                                    <option selected>Phường xã / Thị trấn</option>
                                    {village.map((v, index) => (
                                        <option key={index} value={v.id} >{v.name}</option>
                                    ))}

                                </select>
                            </div>

                        </div>
                        <div className=" oder-item-top-c">
                            <div className="oder-item-top-content">
                                <div className="oder-item-top-content">Quận / Huyện *</div>
                                <select
                                    class="form-select"
                                    aria-label="Default select example"
                                    onChange={(e) => handleDistrict(e)}
                                >
                                    <option selected>Quận / Huyện *</option>
                                    {distric.map((m, index) => (
                                        <option key={index} value={m.id} >{m.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="oder-item-top-content">Số nhà</div>
                            <div className="oder-item-top-content">
                                <input
                                    type="text"
                                    value={number}
                                    onChange={(e) => { setNumber(e.target.value) }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="oder-item-top">Ghi chú (nếu có) </div>
                    <div className="oder-item-top">
                        <textarea
                            name="" id="" cols="30" rows="5"
                            type={note}
                            onChange={(e) => { setNote(e.target.value) }}

                        ></textarea>
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
                        <div className="order-item-right-content-text">
                            {cart.map((c, index) => (
                                <div className="text">{c.product.name}</div>
                            ))}
                        </div>
                        <div>	{total}</div>
                    </div>
                    <hr />
                    <div className="order-item-right-content">
                        <div>Vận chuyển:</div>
                        <div>	Giao hàng tiết kiệm</div>
                    </div>
                    <hr />
                    <div className="order-item-right-content">
                        <div>Tổng cộng:</div>
                        <div>	{total + 20000}</div>
                    </div>
                    <Link to={`/oderdetail`}><button onClick={handleSubmit}>Đặt hàng</button></Link>
                </div>
            </div>
        </div>
    )

}
export default Oder