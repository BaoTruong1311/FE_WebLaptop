import httpCommon from "./http-common"

const getProductList = () => {
    return httpCommon.get("/admin/product/list")
}
const postProduct = (data) => {
    return httpCommon.post(`/admin/product/insert`, data)

}
const ProductListData = {
    getProductList,
    postProduct
}
export default ProductListData