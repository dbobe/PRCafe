import { View } from 'react-native';
import React from 'react';
import { ImageBackground } from 'react-native';
import { Box, Button, Text, VStack } from 'native-base';

export default function Landing() {
  return (
    <View style={{ flex: 1, width: '100%', height: '100%' }}>
      <ImageBackground
        source={require('../../assets/prFlag.jpg')}
        resizeMode="cover"
        style={{ flex: 1 }}>
        <Box safeArea h="95%" alignItems="center" justifyContent="flex-end">
          <VStack space={2} w="75%">
            <Text fontSize="xl" bold alignSelf="center">
              Bienvenido a Puerto Rico Café
            </Text>
            <Text fontSize="md" italic alignSelf="center">
              Welcome to Puerto Rico Café
            </Text>
            <Button>Login</Button>
            <Button colorScheme="secondary">Register</Button>
          </VStack>
        </Box>
      </ImageBackground>
    </View>
  );
}
