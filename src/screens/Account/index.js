import { Text, Touch, TouchableOpacity, View } from 'react-native';
import firebase from '../../config.js/firebase';
import { getAuth, signOut } from "firebase/auth";


export default function Account({navigation}){

    const signOutFirebase = () =>{
        const auth = getAuth();
        signOut(auth).then(() => {
            //Successfully login
            navigation.navigate('Login')
        }).catch((error) => {
        // An error happened.
        });
    }

    return (
        <View>
            <TouchableOpacity
                onPress={signOutFirebase}
            >
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}