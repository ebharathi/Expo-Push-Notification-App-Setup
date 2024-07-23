import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <View className='flex items-center'>
                <Text className='text-red-500'>Home Screen</Text>
            </View>
        </SafeAreaView>
    );
}