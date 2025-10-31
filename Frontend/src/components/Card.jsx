import axios from "axios";
import { useState,useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import "./atc.css"

export function Card({ productId, imgsrc, title, slogan ,price ,category}) {
    // const [X,setX] = useState(false);
    const [CartState, setCartState] = useState({
        myCartItem: [],
        X : false
    });

    const token = localStorage.getItem("token");

  const onAddingAnItemToCart = (imgsrc,title,slogan,price,category,pId)=>{
    console.log("Card token = ",token)
        if(!token){
            alert("Login to add Items in your CART!!!");    
        } else{
            console.log("API CALL")
            axios({
                method : "POST",
                url : "http://localhost:4500/myCartItems/addToCart",
                data : {
                    imgsrc,title,slogan,price,category,pId
                },
                headers : {
                    Authorization : token
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
                        Authorization : token
                    }
                })
                .then((response)=>{
                    console.log("Fetched just after addToCart = ",response.data);
                    setCartState( (prevState)=>{
                        return {
                            ...prevState,
                            X : true,
                            myCartItem : response.data
                        }
                    })
                })
            })
            .catch((error)=>{
                console.log("addToCart error = ",error);
            })
        }
  }

  const onRemovingAnItemFromCart = (pId , title)=>{
    if(!token){
       alert("Login to remove an Item from your CART!!!");    
    } else {
        axios({
            method : "PATCH",
            url : "http://localhost:4500/myCartItems/removeFromCart",
            params : {
                pId , title 
            },
            headers : {
                Authorization : token
            }
        })
        .then((response)=>{
            console.log("removeFromCart = ",response.data);
            alert(response.data);
            axios({
                method : "GET",
                url : "http://localhost:4500/myCartItems/singleItem",
                params : {
                    pId
                },
                headers : {
                    Authorization : token
                }
            })
            .then((response)=>{
                console.log("Fetched just after removeFromCart = ",response.data);
                if(response.data.length === 0){
                    setCartState( (prevState)=>{
                        return {
                            ...prevState,
                            X : false,
                            myCartItem : response.data
                        }
                    })
                } else{
                    setCartState( (prevState)=>{
                        return { 
                            ...prevState,
                            myCartItem : response.data  
                        }
                    })
                }
            })
        })
        .catch((error)=>{
            console.log("removeFromCart = ",error);
        })
    }
  }


  return (
    <>
      <div className="mc w-[300px] bg-white dark:bg-slate-950 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="relative">
              <img src={imgsrc} 
                    alt="Product" className="w-full h-48 object-cover" />
          </div>
          <div className="mc2 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{slogan}</p>
              <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">₹{price}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★★★★★</span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">(4.8)</span>
                  </div>
              </div> 
              {CartState.X ? (
                <>
                  <div className="flex items-center justify-between">
                    <button onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onRemovingAnItemFromCart(productId,title);
                      }}
                      className="px-3 py-1 bg-red-600 rounded minus"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium text-white">
                    {CartState.myCartItem.length > 0 && CartState.myCartItem[0].quantity}
                    </span>
                    <button
                      className="px-3 py-1 bg-green-600 rounded plus"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onAddingAnItemToCart(imgsrc, title,slogan, price ,category, productId);
                      }}
                    >
                      +
                    </button>
                  </div>
                </>
                ) : (
                  <>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        onAddingAnItemToCart(imgsrc,title,slogan,price,category,productId);
                    }} 
                    className="atc w-full bg-yellow-600 hover:bg-amber-950 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                        Add to Cart
                    </button>
                  </>
                )}              
          </div>
      </div>
    </>
  );
}
