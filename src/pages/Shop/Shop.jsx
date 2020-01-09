import React, {Component} from "react";
import CollectionsOverview from "../../components/CollectionOverview/CollectionsOverview";
import CollectionPage from "../Collection/Collection";
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateCollections} from "../../store/Shop/ShopActions";
import WithSpinner from "../../components/WithSpinner/WithSpinner";
import {fetchCollectionsStartAsync} from "../../store/Shop/ShopActions";
import {createStructuredSelector} from "reselect";
import {selectCollectionFetching, selectIsCollectionLoaded} from "../../store/Shop/ShopSelectors";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {

    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props
        fetchCollectionsStartAsync()
    }

    render() {
        const {match, isCollectionFetching, isCollectionLoaded} = this.props

        return (
            <div>
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>}
                />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
