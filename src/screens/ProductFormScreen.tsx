import React from 'react'
import { Text, Button, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ProductFormScreen: React.FC = () => {
	const navigation = useNavigation();

	return (
		<View>
			<Text>Vista de ProductFormScreen</Text>
			<Button
				// @ts-ignore
				onPress={() => navigation.navigate('ProductListScreen')}
				title="Listado"
			/>
		</View>
	)
}

export default ProductFormScreen;