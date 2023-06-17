// import axios from "axios"
// import { useEffect, useState } from "react"


// type cartItem = {
//     productId: number,
//     quantity: number
// }


// export const useCartFunc = () => {

//     const [userCartItems, setUserCartItems] = useState([] as cartItem[]);

//    const user = JSON.parse(localStorage.getItem('user'));
//    const { id, token } = user;

//    const url = `http://localhost:5000/api/carts/find/${id}`;


// console.log(userCartItems)

//         useEffect( () => {

//             const makeRequest = async () => {
//                 const res = await axios.get(`${url}`, {
//                     headers: {
//                         authorization: `Bearer ${token}`
//                     }
//                 })
//                 if(res.status === 200) {
//                     setUserCartItems(res.data.products)
//                     console.log(res.data.products)
//                 }
//             }

//            user && makeRequest(); 

//         }, [])

//     const incCartItem = async (productId: number) => {

//         const itemExist: cartItem = userCartItems.find(item => item.productId === productId);

//         if(itemExist) {
//             // const res = await axios.put(`${url}`, { productId, $inc: {quantity: 1} }, {
//             //     headers: {
//             //         authorization: `Bearer ${token}`
//             //     }
//             // })

//             // if(res.status === 200){
//             //    return setUserCartItems(res.data.products)
//             // }

//             console.log("Item EXIST")

//         } else {

//             const res = await axios.put(`${url}`, { $push: { products: productId } }, {
//                 headers: {
//                     authorization: `Bearer ${token}`
//                 }
//             })

//             if(res.status === 200){
//                return setUserCartItems(res.data.products)
//             }
//         }
//     }

//    return { incCartItem }

// }