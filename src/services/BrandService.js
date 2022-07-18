import httpCommon from "./http-common"

const getAllBrands = () => {
    return httpCommon.get("/admin/brand/list")
}
const BrandDataServices = {
    getAllBrands
}
export default BrandDataServices

