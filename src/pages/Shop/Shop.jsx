import React, {Component} from "react";
import CollectionsOverview from "../../components/CollectionOverview/CollectionsOverview";
import CollectionPage from "../Collection/Collection";
import {Route} from 'react-router-dom'
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {connect} from 'react-redux'
import {updateCollections} from "../../store/Shop/ShopActions";
import WithSpinner from "../../components/WithSpinner/WithSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null

    componentDidMount() {
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections')

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({loading: false})
        })
    }

    render() {
        const {match} = this.props
        const {loading} = this.state

        return (
            <div>
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPage}
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}
                />
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
