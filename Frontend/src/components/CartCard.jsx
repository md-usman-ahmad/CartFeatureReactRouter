import { useState } from "react";
import axios from "axios";

export function CartCard({imgsrc,title,slogan,price, category,quantity ,pId}){

    const [myCartItem , setMyCartItem] = useState([]);
    const onAddingAnItemToCart = (imgsrc,title,slogan,price, category ,pId)=>{
        axios({
            method : "POST",
            url : "http://localhost:4500/myCartItems/addToCart",
            data : {
                imgsrc,title,slogan,price,category,pId
            },
            headers : {
                Authorization : localStorage.getItem("token")
            }
        })
        .then((response)=>{
            console.log("addToCart response.data = ",response.data);
            alert(response.data);
            axios({
                method : "GET",
                url : "http://localhost:4500/myCartItems/singleItem",   
                params : {
                    pId
                },
                headers : {
                    Authorization : localStorage.getItem("token")
                }
            })
            .then((response)=>{
                console.log("Fetched just after addToCart = ",response.data);
                setMyCartItem(response.data)
            })
        })
        .catch((error)=>{
            console.log("addToCart error = ",error);
        })
    }


    return (
    <>
        <tr className="product-row border-b">
            <td >
                <div className="flex items-center">
                    <div className="h-30 w-30 mr-4  rounded-lg flex items-center justify-center">
                        <img src={imgsrc} alt="" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-semibold">{title}</span>
                </div>
            </td>
            <td className="py-4 font-semibold text-blue-600">₹{price}</td>
            <td className="py-4">
                <div className="flex items-center">
                    <button  className="quantity-btn border rounded-md py-2 px-4 mr-2 minus" data-action="decrease">-</button>
                    <span className="text-center w-8 quantity-display font-semibold">{myCartItem.length > 0 ? myCartItem[0].quantity :  quantity }</span>
                    <button onClick={()=>{ onAddingAnItemToCart(imgsrc,title,slogan,price, category ,pId) }} className="quantity-btn border rounded-md py-2 px-4 ml-2 plus" data-action="increase">+</button>
                </div>
            </td>
            <td className="py-4 font-bold text-lg total-price">₹{price*quantity}</td>
        </tr>
    </>
    )
}