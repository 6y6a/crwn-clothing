import React from "react";
import './MenuItem.scss'
import {withRouter} from 'react-router-dom'

import {MenuContent, MenuTitle, MenuSubtitle, MenuItemContainer, BackgroundImage} from "./MenuItemStyles";

const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => (
    <MenuItemContainer
        className={`menu-item ${size}`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImage imageUrl={imageUrl} className='background-image'/>
        <MenuContent className='content'>
            <MenuTitle>{title}</MenuTitle>
            <MenuSubtitle>Shop now</MenuSubtitle>
        </MenuContent>
    </MenuItemContainer>
)

export default withRouter(MenuItem)
