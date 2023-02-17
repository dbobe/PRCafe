import React from 'react';
import { Box, FlatList, VStack } from 'native-base';
import Header from '../components/Header';
import CategoryItem from '../components/CategoryItem';

import menu from '../../assets/data/menuCategories.json';

const Home = () => {
  return (
    <Box safeArea flex={1} w="100%">
      <VStack flex={1} alignItems="center">
        <Header />
        <FlatList
          ItemSeparatorComponent={<Box height={2} />}
          flex={1}
          data={menu.categories}
          renderItem={({ item }) => <CategoryItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </VStack>

      {/* {menu.categories.map((item) => (
        <CategoryItem item={item} />
      ))} */}
    </Box>
  );
};

export default Home;
