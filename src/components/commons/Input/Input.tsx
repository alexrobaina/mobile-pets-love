import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from 'styles/colors';
import { TextInput } from 'react-native-gesture-handler';

interface Props {
  label?: string;
  placeholder: string;
  errorMessage: string;
  secureTextEntry: boolean;
  handleChange?: (e: string | number) => void;
}

const Input: FC<Props> = ({
  label = '',
  placeholder,
  handleChange,
  errorMessage,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.containar}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleChange}
        secureTextEntry={secureTextEntry}
      />
      <Text style={styles.label}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containar: {
    position: 'relative',
    width: '100%',
    zIndex: 40,
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
});

export default Input;
