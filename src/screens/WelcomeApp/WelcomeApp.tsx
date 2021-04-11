import React, { useState, useRef } from 'react';
import { View, FlatList, Animated, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import OnboardingItem from './OnboardingItem';
import AppButton from 'components/commons/AppButton';
import BasePaginator from 'components/commons/BasePaginator';
import Layout from 'components/commons/Layout';

const slides = [
  {
    title: 'Administrador de refugios',
    id: 0,
    image: require('../../assets/images/noteBookShelter.png'),
  },
  {
    title: 'Historial medico',
    id: 1,
    image: require('../../assets/images/noteBookShelter.png'),
  },
  {
    title: 'Compartir perfiles',
    id: 2,
    image: require('../../assets/images/noteBookShelter.png'),
  },
];

const WelcomeApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);
  const scrollX = new Animated.Value(1);
  const { t } = useTranslation();

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <>
      <View
        style={{ justifyContent: 'center', height: 400, marginBottom: 40, marginTop: 80 }}
      >
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
          renderItem={({ item }) => {
            return (
              <OnboardingItem
                title={item.title}
                image={item.image}
                description={item.title}
              />
            );
          }}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
        />
        <BasePaginator scrollX={scrollX} data={slides} />
      </View>
      <Layout>
        <AppButton handlePress={() => console.log('asd')} title="Iniciar sesion" />
        <AppButton handlePress={() => console.log('asd')} title="Registrarme" />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeApp;
