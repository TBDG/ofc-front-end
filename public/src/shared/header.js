import {useState} from "react"
import {Link} from "react-router-dom";
import {AiOutlineMenu, BsBag, IoPersonCircle, GrClose} from "react-icons/all";

const links = [
    {
        title: "Home",
        link: "",
        key: "home",
    }, {
        title: "Shop",
        link: "",
        key: "shop",
        children: [
            {
                title: "Fish",
                link: ""
            }, {
                title: "Inverts",
                link: ""
            }, {
                title: "Plants",
                link: ""
            }, {
                title: "Merch",
                link: ""
            }]
    }, {
        title: "Pick Your Breeder",
        link: "",
        key: "breeder",
        children: [
            {
                title: "Guppy Guru",
                link: ""
            }
        ]
    }, {
        title: "Become A Breeder",
        link: "",
        key: "becomeABreeder",
    }, {
        title: "OFC Media",
        link: "",
        key: "media",
    }, {
        title: "More",
        link: "",
        key: "more",
        children: [{
            title: "OFC Members",
            link: ""
        }, {
            title: "Getting Started",
            link: ""
        }, {
            title: "How We Ship",
            link: ""
        }, {
            title: "Products for Sellers",
            link: ""
        }, {
            title: "Add New Product",
            link: ""
        }, {
            title: "Member Support",
            link: ""
        }, {
            title: "Customer Care",
            link: ""
        }, {
            title: "Forum",
            link: ""
        }]
    }
]

function Header() {
    const [isShown, setIsShown] = useState({})
    const [sideMenu, setSideMenu] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const childMap = (children) => {
        return children.map((child) => {
            return (
                <li className="link"><a href={child.link}>{child.title}</a></li>
            )
        })
    }

    const linksMap = links.map((link) => {
        return (
            <div className="links">
                <nav>
                    {link.children ?
                        <li
                            onMouseEnter={() => setIsShown({...isShown, [link.key]: true})}
                            onMouseLeave={() => setIsShown({...isShown, [link.key]: false})}
                        >
                            <Link to={`${link.link}`} className='link'>{link.title}</Link>
                            {isShown[link.key] ? (<ul className="dropdown">
                                {childMap(link.children)}
                            </ul>) : null}
                        </li>
                        : <li>
                            <Link to={`${link.link}`} className="link">{link.title}</Link>
                        </li>}
                </nav>
            </div>
        )
    })

    const mobileLinksMap = links.map((link) => {
        return (
            <div className="mobile-links">
                {link.children ?
                    <li
                        onClick={() => dropdownToggle(link.key)}
                    >
                        <Link to={`${link.link}`} className='mobile-link'>{link.title}</Link>
                        {dropdownOpen[link.key] ? (
                            <ul className="children">
                                {childMap(link.children)}
                            </ul>
                        ) : null}
                    </li>
                    : <li>
                        <Link to={`${link.link}`} className="mobile-link">{link.title}</Link>
                    </li>}
            </div>
        )
    })

    const popOutMenu = () => {
        let popOutClasses = "pop-out-menu"
        if (sideMenu) {
            popOutClasses = "pop-out-menu open"
        }
        return (
            <div className={popOutClasses}>
                <div className="mobile-login">
                    <p><IoPersonCircle/> Log In</p>
                </div>
                <div className="mobile-close-menu" onClick={() => setSideMenu(false)}>
                    <GrClose/>
                </div>
                {mobileLinksMap}
            </div>
        )
    }

    const dropdownToggle = (key) => {
        setDropdownOpen({...dropdownOpen, [key]: !dropdownOpen[key]})
    }

    return (
        <div className="Header">
            <div className="container">
                <div className="row mobile-view-container">
                    <div className="col-3 mobile-menu">
                        <div className="mobile-menu-icon" onClick={() => setSideMenu(true)}>
                            <AiOutlineMenu classname="mobile-menu-icon"/>
                        </div>
                        {popOutMenu()}
                    </div>
                    <div className="col-3 col-lg-6 icons">
                        <BsBag/>
                        <div className="user-wrapper">
                            <div className="user-icon">
                                <IoPersonCircle/>
                            </div>
                            <p>Log In</p>
                        </div>
                    </div>
                </div>
                <div className=" col-lg-12 banner">
                    <div className="logo-statement col-lg-12">
                        <div className=" col-lg-2 logo">
                            <img alt="logo"
                                 src={"https://static.wixstatic.com/media/603dfa_5b8650973a7449e1a9fc58e07fd1f667~mv2.png/v1/fill/w_186,h_140,al_c,q_85,usm_0.66_1.00_0.01/OFCYellow.webp"}/>
                        </div>
                        <h1 className="col-lg-10">A SITE FOR HOBBYISTS BY HOBBYISTS</h1>
                    </div>
                    <div className="desktop-links col-lg-10">
                        {linksMap}
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default Header;
