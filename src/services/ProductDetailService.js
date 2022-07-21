import httpCommon from "./http-common"

const getProductDetail = (id) => {
    return httpCommon.get(`/detail/${id}`)
}
const ProductDetailDataService = {
    getProductDetail
}
export default ProductDetailDataService



