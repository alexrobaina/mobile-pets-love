import React, { FC, useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from 'components/commons/ImageInput';
// lallopis@teco.com.ar
interface Props {
  imageUris?: Array<String>;
  onRemoveImage: (uri: any) => void;
  onAddImage: (uri: any) => void;
}

const ImageInputList: FC<Props> = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollView: any = useRef();
  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        {imageUris.map((uri) => (
          <View style={styles.image}>
            <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
          </View>
        ))}
        <ImageInput onChangeImage={onAddImage} />
      </ScrollView>
    </View>
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

export default ImageInputList;
