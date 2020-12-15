import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Platform} from 'react-native'

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import Colors from '../constatns/Colors'
const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS=== 'android' ?  Colors.primary : ''
        },
        headerTintColor: Platform.OS=== 'android' ? 'white': Colors.primary
    }
})

export default createAppContainer(ProductsNavigator)