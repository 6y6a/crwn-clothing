import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import {compose} from 'redux'

import {selectCollectionFetching, selectIsCollectionLoaded} from "../../store/Shop/ShopSelectors";
import WithSpinner from "../WithSpinner/WithSpinner";
import CollectionsOverview from "./CollectionsOverview";

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionOverviewContainer
