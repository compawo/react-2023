import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postService = {
    getAll: () => axiosService.get(urls.comments),
    getById: (id) => axiosService.get(`${urls.comments}/${id}`)
}

export {
    postService
}