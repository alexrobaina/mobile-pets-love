import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { number } from 'yup';
interface Props {
  as: any;
  name: string;
  error: string;
  label?: string;
  hasError: boolean;
  required?: boolean;
  hideError?: boolean;
  inputRef?: Function;
  placeholder: string;
  value: string | number;
  isSecureText?: boolean;
  handleViewSecureText?: () => void;
  handleChange?: (value: string | number) => void;
}

const WrapperInputs: FC<Props> = ({
  name,
  error,
  value,
  hasError,
  label = '',
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
        name={name}
        label={label}
        value={value}
        error={error}
        hasError={hasError}
        inputRef={inputRef}
        required={required}
        placeholder={placeholder}
        handleChange={handleChange}
        isSecureText={isSecureText}
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

export default WrapperInputs;
