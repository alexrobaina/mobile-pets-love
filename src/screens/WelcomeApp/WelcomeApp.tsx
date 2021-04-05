import React, { useState, useRef, useMemo } from 'react';
import { Image, View, FlatList, Animated } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useTranslation } from 'react-i18next';
import AppTitle from 'components/commons/AppTitle';
import Layout from 'components/commons/Layout';
import styles from './welcomeApp.styles';

const slides = [
  {
    id: '1',
    image: require('../../assets/images/noteBookShelter.png'),
  },
  {
    id: '2',
    image: require('../../assets/images/noteBookShelter.png'),
  },
  {
    id: '3',
    image: require('../../assets/images/noteBookShelter.png'),
  },
];

const Login = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const { t } = useTranslation();

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  // const { loading } = useSelector((state: any) => state.auth);

  // if (loading) {
  //   return <AppTitle text={t('loading')} />;
  // }

  return (
    <Layout>
      <AppTitle text={t('welcomeApp')} />
      <View style={{ flex: 3 }}>
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator
          keyExtractor={(item) => item.id}
          bounces={false}
          data={slides}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          renderItem={({ item }) => (
            <Image
              source={require('../../assets/images/noteBookShelter.png')}
              style={styles.image}
            />
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      {/* <Image
        source={require('../../assets/images/noteBookShelter.png')}
        style={styles.image}
      /> */}
    </Layout>
  );
};

export default Login;
