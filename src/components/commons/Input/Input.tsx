import React, { FC, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native';
import { observer, useLocalObservable } from 'mobx-react-lite';
import InternalInputStore from './InternalInputStore';
import colors from 'styles/colors';
import PasswordEyeButton from './PasswordEyeButton/PasswordEyeButton';

interface Props {
  name: string;
  error: string;
  value?: string;
  label?: string;
  hasError: boolean;
  placeholder: string;
  errorMessage: string;
  isRequired?: boolean;
  isSecureText?: boolean;
  validationType?: string;
  handleChange: (
    e: string | number,
    name: string,
    validationType?: string,
    isRequired?: boolean,
  ) => void;
}

const Input: FC<Props> = ({
  name,
  error,
  hasError,
  value = '',
  label = '',
  placeholder,
  handleChange,
  isRequired = false,
  validationType = '',
  isSecureText = false,
}) => {
  const internalInputStore = useLocalObservable(() => new InternalInputStore());

  const handleViewSecureText = useCallback(() => {
    internalInputStore.setSecureTextEntry();
  }, []);

  const handleChangeText = useCallback((text) => {
    handleChange(text, name, validationType, isRequired);
  }, []);

  useEffect(() => {
    if (isSecureText) {
      internalInputStore.setSecureTextEntry();
    }
  }, []);

  const styles = StyleSheet.create({
    containar: {
      position: 'relative',
      width: '100%',
      zIndex: 10,
    },
    viewPasswordEye: {
      position: 'absolute',
      zIndex: 20,
      right: 20,
      top: 31,
      width: 25,
      height: 50,
    },
    label: {
      marginBottom: 5,
      fontFamily: 'lato-regular',
      letterSpacing: 1,
      color: colors.primary.text,
      ...Platform.select({
        ios: {
          fontSize: 16,
        },
        android: {
          fontSize: 18,
        },
      }),
    },
    input: {
      padding: 12,
      borderWidth: 1.2,
      borderRadius: 8,
      borderColor: hasError ? 'red' : colors.borderInput,
    },
    error: {
      color: colors.error,
      marginTop: 5,
    },
  });

  return (
    <>
      <PasswordEyeButton
        isSecureText={isSecureText}
        handleViewSecureText={handleViewSecureText}
        secureTextEntry={internalInputStore.secureTextEntry}
      />
      <View style={styles.containar}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          value={value}
          style={styles.input}
          autoCapitalize="none"
          placeholder={placeholder}
          onChangeText={handleChangeText}
          secureTextEntry={internalInputStore.secureTextEntry}
        />
        <Text style={styles.error}>{error}</Text>
      </View>
    </>
  );
};

export default observer(Input);
