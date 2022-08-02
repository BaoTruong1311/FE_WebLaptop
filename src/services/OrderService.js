import httpCommon from "./http-common"

const postOder = (data) => {
    return httpCommon.post(`/order`, data)
}
const OderDataService = {
    postOder,
}
export default OderDataService