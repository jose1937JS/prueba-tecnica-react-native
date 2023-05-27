import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductFormScreen from '../screens/ProductFormScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailsScreen';

const Stack = createNativeStackNavigator();

const MainNavigator: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="ProductFormScreen" component={ProductFormScreen} />
				<Stack.Screen name="ProductListScreen" component={ProductListScreen} />
				<Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default MainNavigator;