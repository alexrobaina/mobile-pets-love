import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import AppTitle from 'components/commons/AppTitle';
import Layout from 'components/commons/Layout';
import { useTranslation } from 'react-i18next';
import * as Permissions from 'expo-permissions';
import ImageInputList from 'components/commons/ImageInputList';
import MessageScreen from 'screens/MessagesScreen';

const PetCreation = () => {
  const [imageUris, setImageUris]: any[] = useState([]);
  Permissions.askAsync(Permissions.CAMERA);
  const { t } = useTranslation();

  const handleAdd = (uri: []) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri: string) => {
    setImageUris(imageUris.filter((imageUri: string) => imageUri !== uri));
  };

  return (
    <Layout>
      <AppTitle text={t('petCreation')} />
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <MessageScreen />
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
