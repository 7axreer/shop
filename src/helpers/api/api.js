import  axiosClient  from "./axiosClient";

const apiProducts = {
    getProducts() {
        const url = `/products?limit=40&skip=77&}`
        return axiosClient.get(url)
    },
    getNewProducts() {
        const url = `/products?limit=15&skip=50&}`
        return axiosClient.get(url)
    },
    getDiscProducts() {
        const url = `/products?limit=15&skip=50&}`
        return axiosClient.get(url)
    },
    getCategories() {
        const url = `/products/category-list`
        return axiosClient.get(url)
    },
}

export default apiProducts