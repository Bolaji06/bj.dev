
import Footer from "../../components/Footer/Footer";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }){

    return (
        <>
            <main>
              { children }
              <div className="py-10">
                <Footer />
                </div> 
               
            </main>
            
        </>
    )
}