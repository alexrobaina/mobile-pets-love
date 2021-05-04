import React from 'react';
import { Image, useWindowDimensions, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppTitle from 'components/commons/AppTitle';
import AppText from 'components/commons/AppText';
import Layout from 'components/commons/Layout';
import makeStyles from './SliceItem.styles';

const SliceItem = ({ image, title, description }) => {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  const styles = makeStyles(width);

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={[styles.image, { width }]} source={image} />
      <Layout>
        {title && (
          <View style={styles.title}>
            <AppTitle medium text={title} />
          </View>
        )}
        {description && (
          <View style={styles.description}>
            <AppText center text={description} />
          </View>
        )}
      </Layout>
    </View>
  );
};

export default SliceItem;
