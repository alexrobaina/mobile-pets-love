import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from 'styles/colors';
import { Ionicons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';

interface Props {
  isSecureText: boolean;
  secureTextEntry: boolean;
  handleViewSecureText?: () => void;
}

const PasswordEyeButton: FC<Props> = ({
  handleViewSecureText,
  isSecureText = false,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.viewPasswordEye}>
      {isSecureText && (
        <TouchableHighlight
          activeOpacity={0.2}
          underlayColor={colors.transparent}
          onPress={handleViewSecureText}
        >
          {secureTextEntry ? (
            <Ionicons name="eye-outline" size={24} />
          ) : (
            <Ionicons name="eye-off-sharp" size={24} color={colors.black} />
          )}
        </TouchableHighlight>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewPasswordEye: {
    position: 'absolute',
    zIndex: 20,
    right: 20,
    top: 31,
    width: 25,
    height: 50,
  },
});

export default PasswordEyeButton;
