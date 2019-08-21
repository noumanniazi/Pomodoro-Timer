import React from 'react';
import { Link } from "react-router-dom";

import './Header.scss';

interface iLinks {
    url: string;
    text: string;
}
type props =  {
    title: string;
    links: iLinks[];
}

const Header: React.FC<props> = (props) => {
    const { title, links } = props;
    return (
        <div className="nav">
            <div className="nav-title">{title}</div>
            <ul className="nav-links">
                {links.map((item: iLinks, index:number) => <Link key={`link-${index}`} to={item.url} className="nav-link">{item.text}</Link>)}
            </ul>
        </div>
    )
}

export default Header;