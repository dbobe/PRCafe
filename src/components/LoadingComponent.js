import React from 'react';
import { Center, HStack, Text, Image } from 'native-base';

export default function LoadingComponent() {
  return (
    <Center>
      <HStack alignItems="center">
        <Image
          source={require('../../assets/Flag_of_Puerto_Rico.gif')}
          alt="Puerto Rico Flag"
          style={{ width: 48, height: 36 }}
        />
        <Text marginLeft={2}>Loading...</Text>
      </HStack>
    </Center>
  );
}
