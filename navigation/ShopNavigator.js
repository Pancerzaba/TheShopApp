import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native'

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import Colors from '../constatns/Colors'
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS=== 'android' ?  Colors.primary : ''
        },
        headerTintColor: Platform.OS=== 'android' ? 'white': Colors.primary
    }
})

export default createAppContainer(ProductsNavigator)