import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from 'styles/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface Props {
  handleOnPress: () => void;
}

const ListItemDeleteAction: FC<Props> = ({ handleOnPress }) => {
  // const handleSelectedItem = () => {
  //   handleOnPress(id);
  // };

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.actionContainer}>
        <Feather name="trash-2" size={30} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    backgroundColor: colors.danger,
    width: 70,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItemDeleteAction;
