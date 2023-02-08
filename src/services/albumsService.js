import {axiosService} from "./axiosService";
import {urls} from "../configs";

export const albumsService = {
    getAll: () => axiosService.get(urls.albums),
}