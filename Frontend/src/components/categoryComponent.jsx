import { useEffect, useState } from "react";
import { MainLayout } from "./mainLayout.jsx";
import axios from "axios";
import { Card } from "./Card.jsx";
import { useParams , Link } from "react-router";



export function categoryComponent(){
    const { categoryName } = useParams();
    

    const [categoryProducts , setCategoryProducts] = useState([]);
    console.log("categoryProducts : ", categoryProducts);

    useEffect( ()=>{ 
        axios({
            method : "GET",
            url : "http://localhost:4500/getCategoryProducts",
            params : {
               categoryName
            }
        })
        .then((response)=>{
            console.log("getCategoryProducts = ",response.data);
            setCategoryProducts(response.data)
        })
        .catch((error)=>{
            console.log("error = ",error);
        })
    },[categoryName])


    return (
        <>  
            <MainLayout>
                <div className="w-full flex flex-wrap justify-center mx-auto gap-3 p-4  ">
                    {categoryProducts.map( (item)=>{
                        return <Link to={`/${categoryName}/${item.productId}`} key={item.productId} 
                        >
                         <Card  {...item}></Card>
                        </Link>
                    })}
                </div>
            </MainLayout>
        </>
    )
}