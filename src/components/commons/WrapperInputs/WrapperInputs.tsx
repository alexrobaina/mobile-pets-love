import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { StyleSheet, View } from 'react-native';
import InputStore from 'stores/InputStore';
interface Props {
  as: any;
  label?: string;
  required?: boolean;
  hideError?: boolean;
  inputRef?: Function;
  placeholder: string;
  isSecureText?: boolean;
  inputStore: InputStore;
  handleChange?: (value: string | number) => void;
  handleViewSecureText?: () => void;
}

const WrapperInputs: FC<Props> = ({
  label = '',
  inputStore,
  isSecureText,
  as: Component,
  inputRef = null,
  required = false,
  placeholder = '',
  hideError = false,
  handleChange = null,
  ...props
}) => {
  return (
    <View style={styles.wrapper}>
      <Component
        {...props}
        label={label}
        inputRef={inputRef}
        required={required}
        placeholder={placeholder}
        handleChange={handleChange}
        isSecureText={isSecureText}
        value={inputStore && inputStore.value}
        errorMessage={
          inputStore && !hideError && inputStore.errorMessage
            ? inputStore.errorMessage
            : ''
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 10,
  },
});

export default observer(WrapperInputs);
