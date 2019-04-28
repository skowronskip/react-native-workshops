import { createStackNavigator } from 'react-navigation';
import WeightScreen from "../screens/WeightScreen/weightScreen";
import ProductScreen from "../screens/ProductScreen/ProductScreen";
import AddWeightScreen from "../screens/AddWeightScreen/AddWeightScreen";

export const WeightStack = createStackNavigator({
   WeightScreen: {
       screen: WeightScreen,
       navigationOptions: {
           title: 'Weights'
       }
   },
    AddWeightScreen: {
       screen: AddWeightScreen,
    }
});

export const ProductStack = createStackNavigator({
    ProductScreen: {
        screen: ProductScreen,
        navigationOptions: {
            title: 'Products'
        }
    }
});
