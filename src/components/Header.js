import { View, Text } from 'react-native';
import React from 'react';
import { Avatar, Box, Heading, HStack, Icon, IconButton } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const Header = () => {
  return (
    <Box safeArea w="100%" padding={2} flex={1}>
      <HStack backgroundColor="red.500">
        <HStack alignItems="center" flex={1}>
          <Avatar size="sm" source={require('../../assets/PR_Cafe_Logo.jpg')} marginRight={2}>
            PR Cafe
          </Avatar>
          <Heading size="md">Puerto Rico Cafe</Heading>
        </HStack>
        <IconButton icon={<Icon as={MaterialIcons} name="menu" />} />
      </HStack>
    </Box>
  );
};

export default Header;
