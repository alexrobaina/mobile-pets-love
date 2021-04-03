import React, { useState } from 'react';
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

export default PetCreation;
