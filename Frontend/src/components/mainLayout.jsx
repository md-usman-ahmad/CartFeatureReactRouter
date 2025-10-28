import axios from "axios";
import { Navbar } from "./Navbar";
import { useState } from "react";



export function MainLayout({children}){

// const [CartState, setCartState] = useState({
//     myCartItems: [],
//     Products: [],
// });
// console.log("CartState = ",CartState);


// const handleGettingProductsFromDB = (category)=>{
//     console.log("category = ",category);
//     axios({
//         method : "GET",
//         url : "http://localhost:4500/getProducts",
//         params : {
//             category
//         }
//     })
//     .then((response)=>{
//         console.log("response.data = ",response.data);
//         let ElectronicsProducts = response.data ;
//         console.log("ElectronicsProducts = ",ElectronicsProducts);
//         setCartState( (prevState)=>{
//             return {
//                 ...prevState,
//                 Products : ElectronicsProducts
//             }
//         })
//         console.log("After setCartState: ", CartState);
//     })
//     .catch((error)=>{
//         console.log("error = ",error);
//     })
// }

    return (
        <>
        <Navbar></Navbar>
        {children}
        </>
    )
}