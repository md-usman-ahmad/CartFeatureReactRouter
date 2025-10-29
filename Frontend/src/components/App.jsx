import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { HomePage } from "./HomePage.jsx";
import { PageNotFound } from "./PageNotFound.jsx"
import { SignupPage } from "./SignupPage.jsx";
import { LoginPage } from "./LoginPage.jsx";
import { categoryComponent } from "./categoryComponent.jsx";
import { ProductPage } from "./ProductPage.jsx";
import { AddProduct } from "./AddProduct.jsx";
import { CartPage } from "./CartPage.jsx";

const routes = createBrowserRouter([
    {
        path : "/",
        Component : HomePage,
        errorElement : <PageNotFound></PageNotFound>
    },
    {
        path : "/Signup",
        Component : SignupPage
    },
    {
        path : "/Login",
        Component : LoginPage
    },
    {
        path : "/:categoryName",
        Component : categoryComponent
    },
    {
        path : "/:categoryName/:productId",
        Component : ProductPage
    },
    {
        path : "AddProduct",
        Component : AddProduct
    },
    {
        path : "/CartPage",
        Component : CartPage
    }
])

export function App(){
    return (
        <>
            <RouterProvider router={routes} ></RouterProvider>
        </>
    )
}