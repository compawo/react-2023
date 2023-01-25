import {axiosService} from "./axiosService";

import {urls} from "../configs";

const userService = {
    getAll: () => axiosService.get(urls.users),
    create: (GetWebsite) => axiosService.post(urls.users, GetWebsite),
}

export {
    userService
}