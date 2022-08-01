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
export const getProductPage= async (page=1)=>{
const response= await axios.get(`https://jyd-shoppers.herokuapp.com/products?page=${page}`)
return response.data
}
