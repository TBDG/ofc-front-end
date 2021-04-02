import React from 'react';
import {useState, useEffect} from 'react';
import Newsletter from './newsletter';
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
            link: '#',
        },
        {
            name: (<AiOutlineInstagram className="footer-icon"/>),
            link: '#',
        },
    ],
};

const Footer = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 650);
  
    const updateMedia = () => {
      setDesktop(window.innerWidth > 650);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });

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

    const desktopFooter = (
        <div id='footer' className='container-fluid'>
            {/* <p id='footer-nav'>
                {itemMap(footerVars.nav)}
            </p>
            <p id='contact-us'>
                {itemMap([{name: 'Contact Us', link: '#',}])}
            </p> */}
            <div id='sections' className='row'>
                <div id='stay-connected' className='col'>
                    <h3 >Stay Connected</h3>
                    <div id='social-media'>
                        {itemMap(footerVars.socialMedia, true)}
                    </div>
                </div>
                <div id='be-our-friend' className='col-6'>
                    <h3 >Be Our Friend</h3>
                    <Newsletter />
                </div>
                <div id='need-assistance' className='col'>
                    <h3 >Need Assistance?</h3>
                    <p>801-707-4839</p>
                </div>
            </div>
            
            <p><AiOutlineCopyright /> Our Fish Collective</p>
        </div>
    );

    const mobileFooter = (
        <div id='footer' className='container-fluid'>
            {/* <p id='footer-nav'>
                {itemMap(footerVars.nav)}
            </p>
            <p id='contact-us'>
                {itemMap([{name: 'Contact Us', link: '#',}])}
            </p> */}
            <div id='sections' className='col'>
                <div id='stay-connected' className='col'>
                    <h3 >Stay Connected</h3>
                    <div id='social-media'>
                        {itemMap(footerVars.socialMedia, true)}
                    </div>
                </div>
                <div id='be-our-friend' className='col'>
                    <h3 >Be Our Friend</h3>
                    <Newsletter />
                </div>
                <div id='need-assistance' className='col'>
                    <h3 >Need Assistance?</h3>
                    <p>801-707-4839</p>
                </div>
            </div>
            
            <p><AiOutlineCopyright /> Our Fish Collective</p>
        </div>
    );
   
    return (
      <div>
        {isDesktop ? desktopFooter : mobileFooter}
      </div>
    );
}

export default Footer;
