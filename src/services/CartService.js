import httpCommon from "./http-common"

const addCart = (id) => {
    return httpCommon.post(`/addCart/${id}`)

}
const getCart = () => {
    return httpCommon.get(`/cart`)
}
const CartService = {
    addCart,
    getCart
}
export default CartService

