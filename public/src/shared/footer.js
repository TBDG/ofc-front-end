import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
//see documentation: https://react-icons.github.io/react-icons/
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineCopyright } from 'react-icons/ai';

let footerVars = {
    // nav: [
    //     {
    //         name: 'Home',
    //         link: '#',
    //     },
    //     {
    //         name: 'Store',
    //         link: '#',
    //     },
    //     {
    //         name: 'F.A.Q.',
    //         link: '#',
    //     },
    //     {
    //         name: 'Our Facilities',
    //         link: '#'
    //     },
    //     {
    //         name: 'Create Account',
    //         link: '#',
    //     },
    //     {
    //         name: 'Login',
    //         link: '#',
    //     },
    // ],
    socialMedia: [
        {
            name: (<AiFillFacebook className="footer-icon"/>),
            link: 'https://www.facebook.com/thewaterfrontslc/photos/',
        },
        {
            name: (<AiOutlineInstagram className="footer-icon"/>),
            link: 'https://www.instagram.com/thewaterfrontslc/',
        },
    ],
};

const Footer = () => {
    //I'm leaving some unused code here in case our client decides he wants to have nav links in the footer.
    const itemMap = (arr, target) => {
        if (target) {
            return arr.map(e => <a href={e.link} rel="noopener noreferrer" target='_blank'>{e.name}</a>)
        }
        return arr.map((e, i) => {
            if (i === 0) {
                return <a href={e.link}>{e.name}</a>;
            } else { return <a href={e.link}> • {e.name}</a>};
        })
    }

    return (
        <div id='footer'>
            {/* <p id='footer-nav'>
                {itemMap(footerVars.nav)}
            </p>
            <p id='contact-us'>
                {itemMap([{name: 'Contact Us', link: '#',}])}
            </p> */}

            <div id='social-media'>
                {itemMap(footerVars.socialMedia, true)}
            </div>
            <br />
            <p><AiOutlineCopyright /> 2021, The Waterfront SLC</p>
        </div>
    )
}

export default Footer;