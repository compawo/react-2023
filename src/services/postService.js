import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postService = {
    getPostById: (id) => axiosService.get(urls.postById(id))
}

export {
    postService
}