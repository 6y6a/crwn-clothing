import React, {Component} from "react";
import CollectionOverviewContainer from "../../components/CollectionOverview/CollectionOverviewContainer";
import CollectionPageContainer from "../Collection/CollectionContainer";
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchCollectionsStartAsync} from "../../store/Shop/ShopActions";

class ShopPage extends Component {

    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props
        fetchCollectionsStartAsync()
    }

    render() {
        const {match} = this.props

        return (
            <div>
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage)
