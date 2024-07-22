import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'nativewind';

const Index = () => {
    return (
        <SafeAreaView>
            <View className='h-[100%] flex justify-center items-center'>
                <Text className="text-primary-500">Welcome to the React Native App!</Text>
            </View>
        </SafeAreaView>
    );
};

export default Index;
