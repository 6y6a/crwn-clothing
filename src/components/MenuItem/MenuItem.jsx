import React from "react";
import './MenuItem.scss'
import {withRouter} from 'react-router-dom'

const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => (
    <div
        className={`menu-item ${size}`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className="background-image"  style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">Shop now</span>
        </div>
    </div>
)

export default withRouter(MenuItem)
