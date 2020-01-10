import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import {compose} from 'redux'

import {selectIsCollectionLoaded} from "../../store/Shop/ShopSelectors";
import WithSpinner from "../../components/WithSpinner/WithSpinner";
import CollectionPage from "./Collection";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer
