import { Cookies } from "react-cookie";

const cookie = new Cookies()

export const setCookie = (name, vlaue, ...option) => {
    return cookie.set(name, vlaue, { ...option })
}

export const getCookie = (name) => {
    return cookie.get(name)
}