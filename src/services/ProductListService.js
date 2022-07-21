import httpCommon from "./http-common"

const getProductList = () => {
    return httpCommon.get("/admin/product/list")
}
const ProductListData = {
    getProductList
}
export default ProductListData