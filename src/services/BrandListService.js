import httpCommon from "./http-common"

const getBrandList = () => {
    return httpCommon.get("/admin/brand/list")
};
const deleteBrandList = (id) => {
    return httpCommon.delete(`/admin/brand/${id}`)
}
const postBrandList = (data) => {
    return httpCommon.post(`/admin/brand/insert`, data)
}

const BrandListDataService = {
    getBrandList,
    deleteBrandList,
    postBrandList
}

export default BrandListDataService


