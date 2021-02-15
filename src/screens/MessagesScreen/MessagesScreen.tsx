import React, { useState } from 'react';
import NOTE_BOOK_SHELTER from '../../assets/images/noteBookShelter.png';
import { FlatList, View } from 'react-native';
import ListItem from 'components/commons/ListItem';
import Screen from 'components/commons/Screen';
import ListItemSeparator from 'components/commons/ListItemSeparator';
import ListItemDeleteAction from 'components/commons/ListItemDeleteAction';

const initialMessage = [
  {
    id: 0,
    title: 'T1',
    description: 'D1',
    image: NOTE_BOOK_SHELTER,
  },
  {
    id: 1,
    title: 'T2',
    description: 'D2',
    image: NOTE_BOOK_SHELTER,
  },
  {
    id: 2,
    title: 'T3',
    description: 'D3',
    image: NOTE_BOOK_SHELTER,
  },
  {
    id: 3,
    title: 'T4',
    description: 'D4',
    image: NOTE_BOOK_SHELTER,
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessage);

  const handleSelectedItem = (id: number) => {
    console.log('hola');
  };

  const handleDelete = (message: any) => {
    const newMessages = messages.filter((m: any) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        renderItem={({ item }) => (
          <ListItem
            id={item.id}
            title={item.title}
            image={item.image}
            subTitle={item.description}
            handleOnPress={handleSelectedItem}
            renderRightActions={() => (
              <ListItemDeleteAction handleOnPress={() => handleDelete(item)} />
            )}
          />
        )}
        keyExtractor={(message) => message.id.toString()}
        data={messages}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </Screen>
  );
};

export default MessagesScreen;
