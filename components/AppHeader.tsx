import { View, Text, TouchableWithoutFeedback, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
//importing and using context varibales
import { useAppStore } from "@/utils/store";
import { useEffect } from "react";
import { router } from "expo-router";
//importing types 
import { UserProps } from "@/utils/types";
//importing mock data
import { userMockData } from "@/constants/mockData";

//Importing ICONS
// See https://icons.expo.fyi/Index for how to use expo icons
import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';

const AppHeader = () => {
    //BELOW IS THE WAY TO USE STORE
    const userData = useAppStore((state) => state.user);
    const setUserData = useAppStore((state) => state.setUser);

    useEffect(() => {
        setTimeout(() => {
            let dummyUserData: UserProps = userMockData;
            // or setUserData(userMockData);
            setUserData(dummyUserData);

        }, 5000);
    }, [])
    return (
        <TouchableWithoutFeedback>
            <SafeAreaView>
                <View style={styles.headerContainer}>
                    <Pressable onPress={() => router.back()} style={styles.backButton}>
                        <MaterialIcons name="arrow-back" size={32} color="black" />
                    </Pressable>
                    <Text style={styles.userName}>{userData?.personalDetails?.name}</Text>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}



//TAILWIND IS NOT WORKING IN THIS PAGE,SO I HAVE USED STYLESHEET ,BUT RECOMMENDED TO USE TAILWIND ALWAYS AND EVERYWHERE

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    backButton: {
        marginRight: 10,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default AppHeader;