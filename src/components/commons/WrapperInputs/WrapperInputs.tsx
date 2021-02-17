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
  inputStore: InputStore;
  secureTextEntry?: boolean;
  handleChange?: (value: string | number) => void;
}

const WrapperInputs: FC<Props> = ({
  label = '',
  inputStore,
  as: Component,
  inputRef = null,
  required = false,
  placeholder = '',
  hideError = false,
  handleChange = null,
  secureTextEntry = false,
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
        secureTextEntry={secureTextEntry}
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
    flexDirection: 'column',
    width: '100%',
    marginBottom: 5,
  },
});

export default observer(WrapperInputs);
