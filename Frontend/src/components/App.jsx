import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { HomePage } from "./HomePage.jsx";
import { PageNotFound } from "./PageNotFound.jsx"


const routes = createBrowserRouter([
    {
        path : "/",
        // Component : HomePage,
        errorElement : <PageNotFound></PageNotFound>
    }
])

export function App(){
    return (
        <>
            <RouterProvider router={routes} ></RouterProvider>
        </>
    )
}