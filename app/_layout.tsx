import React, { useRef, useState, useEffect } from 'react';
import { Stack } from 'expo-router';
//importing Tailwind
import 'nativewind';
import * as Notifications from 'expo-notifications';
// importing Header 
import AppHeader from '@/components/AppHeader';
//Push notification registration for the app
import { registerForPushNotificationsAsync } from '@/utils/notification';

//PUSH NOTIFICATION SETUP
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});


export default function App() {
  //Push Notification setup
  const [notification, setNotification] = useState<Notifications.Notification | undefined>(undefined);
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then(token => console.log("TOKEN:", token))
      .catch((error: any) => console.log("ERROR:", error));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      notificationListener.current && Notifications.removeNotificationSubscription(notificationListener.current);
      responseListener.current && Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="screens/home"
        options={{ header: () => <AppHeader /> }}
      />
    </Stack>
  );
}