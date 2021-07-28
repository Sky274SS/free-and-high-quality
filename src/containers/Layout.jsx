import React from 'react';
import Header from "../pages/Header";
import End from "../pages/End";

const Layout = ({children}) => {

    return (
        <section className='container'>
            <Header/>
            <div className='content'>
                {children}
            </div>
            <End/>
        </section>
    )
};

export default Layout;