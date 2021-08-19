import React, { ReactNode } from 'react';
import './Footer.css';

class Footer extends React.Component
{
    render(): ReactNode
    {
        return (
            <footer className="footer text-light pt-3 pb-3 ps-5 pe-5">
                The Unofficial AP Hunger Games is in no way associated with College Board or Advanced Placement. College Board, Advanced Placement, and other College Board trademarks are trademarks or registered trademarks of College Board or its affiliates in the U.S. and elsewhere.
                <br/>
                Made with &#10084; by <a href="https://github.com/DigiWorm0/APHG">DigiWorm</a>
            </footer>
        );
    }
}
export default Footer;
