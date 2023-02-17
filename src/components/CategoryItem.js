import { View, Text } from 'react-native';
import React from 'react';
import { AspectRatio, Box, Divider, Heading, HStack, Image, Pressable, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';

const handleButtonPress = (item) => {
  console.log(`The button pressed was ${item.categoryName}`);
};

const CategoryItem = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => console.log(`${item.categoryName} was pressed!`)}>
      <Box
        // width="95%"
        overflow="hidden"
        rounded="lg"
        borderColor="coolGray.200"
        borderWidth={1}
        //   _light={{
        //     backgroundColor="gray.50"
        //   }}
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}>
        <HStack space={4} alignItems="center">
          <AspectRatio w="50%" ratio={16 / 9}>
            <Image alt="image" source={{ uri: item.categoryImage }} />
          </AspectRatio>
          <VStack space={1}>
            <Heading size="md">{item.categoryName}</Heading>
            <Text fontSize="md">{item.categoryTranslation}</Text>
          </VStack>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};

export default CategoryItem;
