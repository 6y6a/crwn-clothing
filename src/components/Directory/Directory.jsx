import React, {Component} from "react";
import {connect} from 'react-redux'
import {selectDirectorySection} from "../../store/Directory/DirectorySelectore";
import {createStructuredSelector} from "reselect";

import './Directory.scss'
import MenuItem from "../MenuItem/MenuItem";

const Directory = ({sections}) => (
    <div className="directory-menu">
        {sections.map(({id, ...otherProps}) => (
            <MenuItem key={id} {...otherProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory)
