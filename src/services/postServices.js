import {axiosService} from "./axiosServices";
import {urls} from "../configs";

const postService = {
    getAll:()=>axiosService.get(urls.posts)
}

export {
    postService
}