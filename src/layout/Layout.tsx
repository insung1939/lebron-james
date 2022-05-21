import Footer from "./Footer";
import Header from "./Header";
import React from "react";

const Layout = (props: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;