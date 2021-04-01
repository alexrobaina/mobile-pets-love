import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
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
  isRequired?: boolean;
  value: string | number;
  isSecureText?: boolean;
  validationType?: string;
  handleViewSecureText?: () => void;
  handleChange?: (
    value: string | number,
    name: string,
    validationType: string,
    isRequired?: boolean,
  ) => void;
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
  isRequired = false,
  validationType = '',
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
        isRequired={isRequired}
        placeholder={placeholder}
        handleChange={handleChange}
        isSecureText={isSecureText}
        validationType={validationType}
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
