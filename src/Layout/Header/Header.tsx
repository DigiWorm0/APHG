import React, { ReactNode } from 'react';
import './Header.css';

class Header extends React.Component
{
    render(): ReactNode
    {
        return (
            <nav className="navbar navbar-light bg-gray p-0">
                <div className="container">
                    <a className="navbar-brand p-0" href="/">
                        <img src="/APHG/banner.png" height="48" alt="CollegeBoard AP Hunger Games" />
                    </a>
                </div>
            </nav>
        );
    }
}
export default Header;
