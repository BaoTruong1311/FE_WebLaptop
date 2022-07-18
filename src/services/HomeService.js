import httpCommon from "./http-common"

const getProductList = () => {
    return httpCommon.get("/admin/product/lists")
}
const ProductDataServices = {
    getProductList
}
export default ProductDataServices