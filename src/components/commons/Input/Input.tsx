import React, { FC, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { observer, useLocalObservable } from 'mobx-react-lite';
import InternalInputStore from './InternalInputStore';
import colors from 'styles/colors';
import { Ionicons } from '@expo/vector-icons';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import PasswordEyeButton from './PasswordEyeButton/PasswordEyeButton';

interface Props {
  value?: string;
  label?: string;
  placeholder: string;
  errorMessage: string;
  isSecureText: boolean;
  handleChange?: (e: string | number) => void;
}

const Input: FC<Props> = ({
  value = '',
  label = '',
  placeholder,
  handleChange,
  errorMessage,
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
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </>
  );
};

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
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.primary.border,
  },
  error: {
    color: colors.error,
    marginTop: 5,
  },
});

export default observer(Input);
