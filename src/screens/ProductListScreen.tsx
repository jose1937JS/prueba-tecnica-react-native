import React, { useState, useEffect } from 'react'
import { Text, Button, View, FlatList, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { container } from '../styles';
import {IProduct, IProductParams} from '../interfaces/products'
import { title } from '../styles'

const ProductListScreen: React.FC = () => {
	const navigation = useNavigation();

	const [data, setData] = useState<IProduct[]>([
		{
			id: 1,
			title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
			price: 109.95,
			description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
			category: "men's clothing",
			image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
			rating: {
					rate: 3.9,
					count: 120
			}
		},
		{
			id: 2,
			title: "Mens Casual Premium Slim Fit T-Shirts",
			price: 22.3,
			description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
			category: "men's clothing",
			image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
			rating: {
					rate: 4.1,
					count: 259
			}
		}
	])

	const ProductList = ({data}: IProductParams) => {
		return (
			<View style={styles.productListContainer}>
				<Image
					source={{ uri: data.image }}
					style={styles.image}
				/>
				<View style={{ flex: 1 }}>
					<Text style={styles.title}>{data.title}</Text>
					<Text style={styles.price}>${data.price}</Text>
				</View>
				
			</View>
		)
	}

	return (
		<View style={container}>
			<Text style={title}>Listado de Productos</Text>
			<FlatList
        data={data}
        renderItem={({item}) => <ProductList data={item} />}
        keyExtractor={(item, index: number) => index.toString()}
      />

			<Button
				// @ts-ignore
				onPress={() => navigation.navigate('ProductDetailScreen')}
				title="Detalles"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	image: {
		width: 80,
		height: 80,
		marginRight: 5,
		resizeMode: 'contain'
	},
	productListContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15,
		borderWidth: 1,
		padding: 5,
		borderRadius: 5
	},
	title: {
		fontSize: 16,
	},
	price: {
		fontSize: 18,
		fontWeight: 'bold'
	}
})

export default ProductListScreen;