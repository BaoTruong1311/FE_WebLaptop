import httpCommon from "./http-common"

const getProvince = () => {
    return httpCommon.get("/order/province");
}
const getDistrict = (id) => {
    return httpCommon.get(`/order/district/${id}`)
}
const getVillage = (id) => {
    return httpCommon.get(`/order/village/${id}`)
}
const AdressService = {
    getProvince,
    getDistrict,
    getVillage
}
export default AdressService