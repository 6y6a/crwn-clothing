import React from "react";
import './MenuItem.scss'

const MenuItem = ({title, imageUrl, size}) => (
    <div
        style={{backgroundImage: `url(${imageUrl})`}}
        className={`menu-item ${size}`}
    >
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">Shop now</span>
        </div>
    </div>
)

export default MenuItem
