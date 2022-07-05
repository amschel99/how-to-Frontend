import axios from "axios"
const BASE_URL= "https://jyd-shoppers.herokuapp.com/"

export default  axios.create({

    baseURL:BASE_URL
})

export const axiosPrivate= axios.create({

baseURL:BASE_URL,
headers:{'Content-Type':'application/json'},
withCredentials:true

})
