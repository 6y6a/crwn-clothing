import React from "react";
import {connect} from 'react-redux'
import {selectDirectorySection} from "../../store/Directory/DirectorySelectore";
import {createStructuredSelector} from "reselect";

import MenuItem from "../MenuItem/MenuItem";

import {DirectoryMenu} from "./DirectoryStyles";

const Directory = ({sections}) => (
    <DirectoryMenu>
        {sections.map(({id, ...otherProps}) => (
            <MenuItem key={id} {...otherProps} />
        ))}
    </DirectoryMenu>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory)
