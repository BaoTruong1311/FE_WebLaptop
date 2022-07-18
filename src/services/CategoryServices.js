import httpCommon from "./http-common"
//lay san pham them id brand
const getCategoryById = (id) => {
    return httpCommon.get(`/category/${id}`)
}
//lay san pham theo gia
const getProductBy5To10 = () => {
    return httpCommon.get(`/category/tu5den10trieu`)
}
const getProductBy10To20 = () => {
    return httpCommon.get(`/category/tu10den20trieu`)
}
const getProductByUnder20 = () => {
    return httpCommon.get(`/category/tren20trieu`)
}
const CategoryDataService = {
    getCategoryById,
    getProductBy10To20,
    getProductBy5To10,
    getProductByUnder20
}
export default CategoryDataService