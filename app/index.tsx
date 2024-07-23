import React from 'react';
import { router } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
    return (
        <SafeAreaView>
            <View className='h-[100%] flex-col justify-center items-center'>
                <Text className="text-primary-500">Welcome to the React Native App!</Text>
                <TouchableOpacity onPress={() => router.push('/screens/home')}>
                    <Text className='bg-primary-500 px-5 py-2 text-white'>Click</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Index;
