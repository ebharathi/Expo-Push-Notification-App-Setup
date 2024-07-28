import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

export async function registerForPushNotificationsAsync(): Promise<string | undefined> {
    const storedToken = await AsyncStorage.getItem('expoPushToken');
    // INSTEAD OF STORING IN THE LOCAL-Storage,IT SHOULD BE STORED WITH USER'S DATA IN DB WHENEVER HE LOGINS 
    if (storedToken) {
        console.log("TOKEN ALREADY EXIXTS")
        return storedToken;
    }

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            throw new Error('Permission not granted to get push token for push notification!');
        }
        const projectId =
            Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
        if (!projectId) {
            throw new Error('Project ID not found');
        }
        try {
            const pushTokenString = (
                await Notifications.getExpoPushTokenAsync({
                    projectId,
                })
            ).data;
            await AsyncStorage.setItem('expoPushToken', pushTokenString);
            return pushTokenString;
        } catch (e: unknown) {
            throw new Error(`${e}`);
        }
    } else {
        throw new Error('Must use physical device for push notifications');
    }
}
