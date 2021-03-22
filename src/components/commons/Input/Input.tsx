import React, { FC, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native';
import { observer, useLocalObservable } from 'mobx-react-lite';
import InternalInputStore from './InternalInputStore';
import colors from 'styles/colors';
import PasswordEyeButton from './PasswordEyeButton/PasswordEyeButton';

interface Props {
  error: string;
  value?: string;
  label?: string;
  hasError: boolean;
  placeholder: string;
  errorMessage: string;
  isSecureText?: boolean;
  handleChange?: (e: string | number) => void;
}

const Input: FC<Props> = ({
  error,
  hasError,
  value = '',
  label = '',
  placeholder,
  handleChange,
  isSecureText = false,
}) => {
  const internalInputStore = useLocalObservable(() => new InternalInputStore());

  const handleViewSecureText = useCallback(() => {
    internalInputStore.setSecureTextEntry();
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
          onChangeText={handleChange}
          secureTextEntry={internalInputStore.secureTextEntry}
        />
        <Text style={styles.error}>{error}</Text>
      </View>
    </>
  );
};

export default observer(Input);
