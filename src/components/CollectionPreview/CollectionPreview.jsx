import React from "react";

import './CollectionPreview.scss'
import CollectionItem from "../CollectionItem/CollectionItem";

import {CollectionPreviewContainer, CollectionTitle, CollectionPreviewItems} from "./CollectionPreviewStyles";

const CollectionPreview = ({title, items}) => (
    <CollectionPreviewContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionPreviewItems>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item}/>
            ))}
        </CollectionPreviewItems>
    </CollectionPreviewContainer>
)

export default CollectionPreview
