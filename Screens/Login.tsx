import React, { useState } from 'react';
import { Text, Button, View, TextInput, Alert } from 'react-native';

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dummyEmail = 'sadman@gmail.com';
  const dummyPassword = '123';

  const handleLogin = () => {
    if (email === dummyEmail && password === dummyPassword) {
      props.navigation.navigate('Menu', { email });
    } else {
      Alert.alert('Please enter the correct email and password.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, color: '#000000' }}>Login</Text>

      <Text style={{ fontSize: 10, color: '#000000', marginTop: 30 }}>Email</Text>
      <TextInput
        style={{
          fontSize: 20,
          borderColor: '#000000',
          borderWidth: 2,
          color: '#000000',
        }}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter Email"
      />

      <Text style={{ fontSize: 10, color: '#000000', marginTop: 30 }}>Password</Text>
      <TextInput
        style={{
          fontSize: 20,
          borderColor: '#000000',
          borderWidth: 2,
          color: '#000000',
        }}
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter Password"
        secureTextEntry={true} // For password input
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};
