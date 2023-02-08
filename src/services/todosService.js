import {axiosService} from "./axiosService";
import {urls} from "../configs";

export const todosService = {
    getAll: () => axiosService.get(urls.todos)
}