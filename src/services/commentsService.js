import {urls} from "../configs";
import {axiosService} from "./axiosService";

export const commentsService = {
    getAll: () => axiosService.get(urls.comments),
}