import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";


export  function useMyCartItems(){

    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const [MyCartItems , setMyCartItems] = useState([]);
    const freshMyCartItems = ()=>{
        axios({
            method : "GET",
            url : "http://localhost:4500/myCartItems",
            headers : {
                Authorization : token
            }
        })
        .then((response)=>{
            console.log("response.data = ",response.data);
            setMyCartItems(response.data);
        })
        .catch((error)=>{
            console.log("error = ",error);
        })
    }

    useEffect( ()=>{
        freshMyCartItems();
    },[])


    return {MyCartItems , freshMyCartItems};
}