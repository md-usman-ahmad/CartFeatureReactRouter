import { Navbar } from "./Navbar";

export function MainLayout({children}){
    return (
        <>
        <Navbar></Navbar>
        {children}
        </>
    )
}