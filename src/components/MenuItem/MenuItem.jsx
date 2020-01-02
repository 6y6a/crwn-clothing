import React from "react";
import './MenuItem.scss'

const MenuItem = ({title}) => (
    <div className="menu-item">
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">Shop now</span>
        </div>
    </div>
)

export default MenuItem
