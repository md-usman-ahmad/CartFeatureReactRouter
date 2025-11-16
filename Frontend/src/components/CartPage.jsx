import { useEffect, useState } from "react";
import axios from "axios";
import { MainLayout } from "./mainLayout.jsx";
import { useNavigate } from "react-router";
import { CartCard } from "./CartCard.jsx";

import { useMyCartItems } from "../Hooks/useMyCartItems.js";

export function CartPage() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const {MyCartItems , freshMyCartItems} = useMyCartItems();

    const handleOnAddingAnItemToCart = (imgsrc,title,slogan,price, category ,pId)=>{
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
            freshMyCartItems();
        })
        .catch((error)=>{
            console.log("addToCart error = ",error);
        })
    }

    const handleOnRemovingAnItemFromCart = (pId,title)=>{
        axios({
            method : "PATCH",
            url : "http://localhost:4500/myCartItems/removeFromCart",
            params : {
                pId , title 
            },
            headers : {
                Authorization : localStorage.getItem("token")
            }
        })
        .then((response)=>{
            console.log("removeFromCart = ",response.data);
            alert(response.data);
            freshMyCartItems();
        })
        .catch((error)=>{
            console.log("removeFromCart = ",error);
        })
    }



  return (
    <>
    <MainLayout>
    {MyCartItems.length === 0 && <div
        className="hero-demo"
        style={{
          border: "2px solid #e5e7eb",
          borderRadius: "8px",
          overflow: "hidden",
          height: "630px",
        }}
      >
        <section className="bg-white py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-12">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-6xl text-gray-400">🛒</span>
              </div>
            </div>
            <h1 className="text-4xl font-light text-gray-800 mb-6">
              Your cart is waiting
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
              No items added yet. Discover our curated collection of products
              and find something that speaks to you.
            </p>
            {/* <button className="bg-gray-900 text-white px-10 py-3 rounded font-medium hover:bg-gray-800 transition duration-300">
                        Explore Products
                    </button> */}
          </div>
        </section>
      </div>
      }

      {MyCartItems.length > 0 && 
        <div className="table-demo justify-items-center">
            <div className="md:w-3/4 ">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left font-semibold py-2">Product</th>
                                <th className="text-left font-semibold py-2">Price</th>
                                <th className="text-left font-semibold py-2 ps-5">Quantity</th>
                                <th className="text-left font-semibold py-2">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MyCartItems.map( (item)=>{
                                return  <CartCard
                                key={item.pId} 
                                {...item}  
                                onRemovingAnItemFromCart = {handleOnRemovingAnItemFromCart}
                                onAddingAnItemToCart = {handleOnAddingAnItemToCart}
                                >
                                </CartCard>
                            })}
                        </tbody>
                    </table>
                    <div className="mt-6 pt-4 border-t">
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold">Cart Total:</span>
                            <span className="text-2xl font-bold text-blue-600 cart-total">₹{MyCartItems.map( (item)=>{
                                return item.quantity * item.price
                            }).reduce( (acc,currentValue)=>{
                                return acc + currentValue
                            })}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
      </MainLayout>
    </>
  );
}
