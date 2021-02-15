import React, { FC, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from 'styles/colors';
import * as ImagePicker from 'expo-image-picker';
import { View, Image, TouchableWithoutFeedback, StyleSheet, Alert } from 'react-native';

interface Props {
  imageUri?: any;
  onChangeImage: (uri: any) => void;
}

const ImageInput: FC<Props> = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert('You need permission to enable for view image');
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('delete', 'Are you sure', [
        {
          text: 'Yes',
          onPress: () => onChangeImage(null),
        },
        { text: 'no' },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons color={colors.primary.icon} name="camera" size={40} />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary.backgroundColor,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  image: {
    borderRadius: 15,
    height: '100%',
    width: '100%',
  },
});

export default ImageInput;
