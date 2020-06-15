import React from 'react';
//import SHOP_DATA from '../../redux/shop/shop.data.js';
//import CollectionPreview from '../../components/collection-preview/collection-preview.component';
//import {connect} from 'react-redux';
//import {createStructuredSelector} from 'reselect'
//import {selectCollections} from '../../redux/shop/shop.selectors';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';


/*class ShopPage extends React.Component{
    constructor(props)
    {
        super(props);

        this.state={
            collections:SHOP_DATA

        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                {
                    collections.map(({id,...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    
}*/

const ShopPage = ({match}) =>(
    <div className = 'shop-page'>
       <Route exact path = {`${match.path}`} component={CollectionsOverview}/>
       <Route  path={`${match.path}/:collectionId`} component={CollectionPage}/>

        
    </div>
)
/*const mapStateToProps = createStructuredSelector({
    collections:selectCollections
})*/


export default ShopPage;

//export default connect(mapStateToProps)(ShopPage);