import React from 'react';
import { View, Animated, useWindowDimensions } from 'react-native';
import styles from './AppPaginator.styles';

const AppPaginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.containerPaginator}>
      <View style={styles.alignDots}>
        {data.map((_, i) => {
          const inputRange = [
            Math.round((i - 1) * width),
            Math.round(i * width),
            Math.round((i + 1) * width),
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <View key={i} style={[styles.containerDot]}>
              <Animated.View
                style={[styles.dot, { width: dotWidth, opacity }]}
                key={i.toString()}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default AppPaginator;
