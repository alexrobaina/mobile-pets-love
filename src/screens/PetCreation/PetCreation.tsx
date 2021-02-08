import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import AppTitle from 'components/commons/AppTitle';
import Layout from 'components/commons/Layout';
// import ImageInput from 'components/commons/ImageInput';
import { useTranslation } from 'react-i18next';
import * as Permissions from 'expo-permissions';
import AppButton from 'components/commons/AppButton';
import * as ImagePicker from 'expo-image-picker';
import ImageInput from 'components/commons/ImageInput';
import ImageInputList from 'components/commons/ImageInputList';

const PetCreation = () => {
  const [imageUris, setImageUris] = useState([]);
  Permissions.askAsync(Permissions.CAMERA);
  const { t } = useTranslation();

  // const goToRegister = useCallback(() => {
  //   navigation.navigate('Register');
  // }, []);

  // const requestPermission = async () => {
  //   const { granted } = await ImagePicker.requestCameraPermissionsAsync();
  //   if (!granted) alert('You need permission to enable for view image');
  // };

  // const selectImage = async () => {
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync();
  //     if (!result.cancelled) {
  //       setImageUris(result.uri);
  //     }
  //   } catch (error) {
  //     console.log('Error reading an image', error);
  //   }
  // };

  const handleAdd = (uri: string) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri: string) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Layout>
      <AppTitle text={t('petCreation')} />
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 20,
    width: 'auto',
    height: 300,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 10,
  },
});

export default PetCreation;
