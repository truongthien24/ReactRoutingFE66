import { ACCESS_TOKEN, DOMAIN, USER_LOGIN } from "../Pages/Settings/setting"
import axios from 'axios'


export class baseService {
    get = (url) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(USER_LOGIN)}`
            }
        })
    }

    post = (url,data) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(USER_LOGIN)}`
            }
        })
    }

    put = (url,data) => {
        return axios({
            url: `${DOMAIN}/${url})`,
            method: 'PUT',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(USER_LOGIN)}`
            }
        })
    }



    delete = (url) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(USER_LOGIN)}`
            }
        })
    }

}