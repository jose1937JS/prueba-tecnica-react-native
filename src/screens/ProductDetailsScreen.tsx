import React from 'react'
import { Text, Button, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ProductDetails: React.FC = () => {
	const navigation = useNavigation();

	return (
		<View>
			<Text>Vista de ProductDetails</Text>
			<Button
				// @ts-ignore
				onPress={() => navigation.navigate('ProductFormScreen')}
				title="Formualrio"
			/>
		</View>
	)
}

export default ProductDetails;