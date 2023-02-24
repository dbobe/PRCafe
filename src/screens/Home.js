import React, { useState } from 'react';
import { Box, FlatList, Heading, ScrollView, VStack } from 'native-base';
import Header from '../components/Header';
import CategoryItem from '../components/CategoryItem';

import menu from '../../assets/data/menuCategories.json';
import plates from '../../assets/menuItems.json';
import { Text } from 'react-native';
import MenuItem from '../components/MenuItem';

const Home = () => {
  const [platesPerCategory, setPlatesPerCategory] = useState(null);

  return (
    <Box safeArea flex={1} w="100%">
      <VStack flex={1}>
        <Header />
        <ScrollView flex={1} paddingX={2}>
          {menu.categories.map((item) => (
            <>
              <Heading paddingY={2} key={`category-${item.id}`}>
                {item.categoryName}
              </Heading>
              <ScrollView
                horizontal={true}
                flexShrink="inherit"
                key={`${item.categoryName}-container`}>
                {plates.menuItems
                  .filter((plate) => plate.category === item.id)
                  .map((menuItem) => (
                    <MenuItem plate={menuItem} key={`${menuItem.name}-${menuItem.id}`} />
                  ))}
              </ScrollView>
            </>
          ))}
        </ScrollView>
      </VStack>
    </Box>
  );
};

export default Home;
