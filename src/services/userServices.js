import {urls} from "../configs";
import {axiosService} from "./axiosServices";

const userService = {
    getAll:()=>axiosService.get(urls.users),
    getById:(id)=>axiosService.get(`${urls.users}/${id}`)
}

export {
    userService
}