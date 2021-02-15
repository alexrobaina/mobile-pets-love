import React, { FC, useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useFormikContext } from 'formik';
import ImageInputList from 'components/commons/ImageInputList';
import ErrorMessage from 'components/commons/ErrorMessage';

interface Props {
  name: string;
}

const FormImagePicker: FC<Props> = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const imageUris = values[name];

  const handleAdd = (uri: []) => {
    setFieldValue(name, [imageUris, uri]);
  };

  const handleRemove = (uri: string) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri: string) => imageUri !== uri),
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={value[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage visible error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  },
});

export default FormImagePicker;
