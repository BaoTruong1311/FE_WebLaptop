import httpCommon from "./http-common"

const getProductDetail = (id) => {
    return httpCommon.get(`/detail/${id}`)
}
const getAll = () => {
    return httpCommon.get('/products')
}
const ProductDetailDataService = {
    getProductDetail,
    getAll
}
export default ProductDetailDataService



