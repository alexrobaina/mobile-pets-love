import React, { FC } from 'react';
import { Text } from 'react-native';
import styles from './appText.styles';

interface Props {
  text: string;
  center?: boolean;
}

const AppText: FC<Props> = ({ text, center }) => {
  return <Text style={[styles.text, center && styles.center]}>{text}</Text>;
};

export default AppText;
