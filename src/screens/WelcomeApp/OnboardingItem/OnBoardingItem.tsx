import React from 'react';
import { Image, useWindowDimensions, View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppTitle from 'components/commons/AppTitle';
import AppText from 'components/commons/AppText';

const OnboardingItem = ({ image, title, description }) => {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();

  return (
    <View style={{ width, height: 380, alignItems: 'center' }}>
      <Image resizeMode="contain" style={[styles.image, { width }]} source={image} />
      {title && (
        <View style={{ marginTop: -50, height: 150 }}>
          <AppTitle medium text={title} />
        </View>
      )}
      <View style={{ marginTop: -40, alignItems: 'center' }}>
        {description && (
          <AppText
            text={'Podras compartir los perfiles en cualquier red social desde la app.'}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default OnboardingItem;
