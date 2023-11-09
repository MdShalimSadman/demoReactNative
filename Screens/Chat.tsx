import React, { useState } from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

export const Chat = () => {
  
  const messages = [
    { id: '1', sender: 'Shakib Al Hasan', message: 'hello' },
    { id: '2', sender: 'Tamim Iqbal', message: 'Hi' },
    {id: '3', sender: 'Mashrafee Bin Murtaza', message: 'how are you'},
    
  ];

  const renderChatItem = ({item}) => (
    <TouchableOpacity style={styles.chatItem}>
      <Text style={styles.sender}>{item.sender}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={styles.header}>Inbox</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderChatItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#000000',
    marginBottom: 16,
  },
  chatItem: {
    padding: 16,

  },
  sender: {
    color:'#000000',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  message: {
    color: '#000',
  },
});

export default Chat;
