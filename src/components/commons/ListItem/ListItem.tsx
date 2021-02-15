import React, { FC } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableHighlight } from 'react-native-gesture-handler';
import colors from 'styles/colors';

interface Props {
  title: string;
  image: any;
  subTitle: string;
  id: number;
  handleOnPress: (id: number) => void;
  renderRightActions: any;
}

const ListItem: FC<Props> = ({
  image,
  title,
  subTitle,
  handleOnPress,
  id,
  renderRightActions,
}) => {
  const handleSelectedItem = () => {
    handleOnPress(id);
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={handleSelectedItem}>
        <View style={styles.flatContainer}>
          <Image style={styles.image} source={image} />
          <View style={styles.titleContainer}>
            <Text>{title}</Text>
            <Text>{subTitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  flatContainer: {
    padding: 15,
    flexDirection: 'row',
  },
  titleContainer: {
    marginLeft: 10,
    display: 'flex',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
});

export default ListItem;
