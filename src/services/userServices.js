import {axiosService} from "./axiosServices";
import {urls} from "../configs";

const userService = {
    getAll:()=>axiosService.get(urls.users)
}

export {
    userService
}