import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react';
import styles from '../Home/style';
import firebase from '../../config.js/firebase';
import { getFirestore, collection, orderBy, query, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { MaterialIcons } from "@expo/vector-icons"
import { FlatList } from 'react-native-gesture-handler';
const db = getFirestore(firebase)

export default function Home({ navigation }){
    const [product, setProduct] = useState([])

    const deleteProduct = (id) =>{
        deleteDoc(doc(db, "products", id))
    }

    useEffect(() => {
        const q = query(collection(db, "products"), orderBy("data_registro","desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const products = [];
            querySnapshot.forEach((doc) => {
                products.push({...doc.data(), id: doc.id});
                // console.log(doc.data())
            });
            setProduct(products)
        });
    }, [])

    return(
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={product}
                renderItem={({item}) =>
                <View style={styles.product}>
                    <View>
                        <Text style={styles.descricao}>{item.descricao}</Text>
                        <Text style={styles.valor}>R$ {item.valor}</Text>
                    </View>
                    <TouchableOpacity onPress={() => deleteProduct(item.id)}>
                        <MaterialIcons name="delete" size={26} color="#F60"/>
                    </TouchableOpacity>
                </View>
            }
            />
            <TouchableOpacity
                style={styles.btnCreate}
                onPress={() => navigation.navigate('CreateProduct')}
            >
                <Text style={styles.btnTextCreate}>+</Text>
            </TouchableOpacity>
        </View>
    );
}