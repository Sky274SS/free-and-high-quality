import React from 'react';
import Header from "../pages/Header";
import End from "../pages/End";

const Layout = ({children}) => {

    return (
        <section className='container'>
            <Header/>
            <main className='content'>
                {children}
            </main>
            <End/>
        </section>
    )
};

export default Layout;