import { SET_USER_INFO } from "./types"

const setUserInfo = payload => ({
    type: SET_USER_INFO,
    payload
}) 

export default setUserInfo;