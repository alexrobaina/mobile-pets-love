import React, { useState, useRef } from 'react';
import { View, FlatList, Animated } from 'react-native';

import AppPaginator from 'components/commons/AppPaginator';
import styles from './AppCarousel.styles';
import SliceItem from './SliceItem';

const AppCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  const scrollX = new Animated.Value(1);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.containerCarousel}>
      <FlatList
        horizontal
        data={slides}
        pagingEnabled
        ref={slidesRef}
        bounces={false}
        scrollEventThrottle={32}
        viewabilityConfig={viewConfig}
        keyExtractor={(item) => item.title}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={viewableItemsChanged}
        renderItem={({ item }) => (
          <SliceItem
            title={item.title}
            image={item.image}
            description={item.description}
          />
        )}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
      />
      <AppPaginator scrollX={scrollX} data={slides} />
    </View>
  );
};

export default AppCarousel;
