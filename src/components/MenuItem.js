import React from 'react';
import { AspectRatio, Box, Heading, Image, Text, VStack } from 'native-base';

const MenuItem = ({ plate }) => {
  return (
    <Box
      w={64}
      backgroundColor="white"
      overflow="hidden"
      rounded="lg"
      borderColor="coolGray.200"
      borderWidth={1}
      _light={{ backgroundColor: 'gray.50' }}
      _dark={{ borderColor: 'coolGray.600', backgroundColor: 'gray.700' }}
      _web={{ shadow: 2, borderWidth: 0 }}>
      <VStack>
        <AspectRatio maxHeight={64} ratio={1 / 1}>
          <Image alt={plate.name} source={{ uri: plate.image }} />
        </AspectRatio>
        <Box padding={2}>
          <VStack flex={0.8}>
            <Heading size="md">{plate.name}</Heading>
            <Text fontSize="sm" italic>
              {plate.nameTranslation}
            </Text>
          </VStack>

          <Text fontSize="lg">
            {plate.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default MenuItem;
