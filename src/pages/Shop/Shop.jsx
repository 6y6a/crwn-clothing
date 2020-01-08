import React, {Component} from "react";
import CollectionsOverview from "../../components/CollectionOverview/CollectionsOverview";
import CollectionPage from "../Collection/Collection";
import {Route} from 'react-router-dom'
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {connect} from 'react-redux'
import {updateCollections} from "../../store/Shop/ShopActions";

class ShopPage extends Component {
    unsubscribeFromSnapshot = null

    componentDidMount() {
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections')

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
        })
    }

    render() {
        const {match} = this.props

        return (
            <div>
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
