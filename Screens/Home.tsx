import {Text, Button, View, TextInput} from 'react-native';
import {useState} from 'react';

export const Home= props => {
    const [name,setName]=useState("");
    const [email,setMail]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, color: '#000000'}}>Welcome Home</Text>
        <Text style={{fontSize: 10, color: '#000000',marginTop:30}}>Name</Text>
      <TextInput
        style={{
          fontSize: 20,
          borderColor: '#000000',
          borderWidth: 2,
          color: '#000000'
        }}
        onChangeText={text => setName(text)}
        placeholder="Enter Name"
      />
       <Text style={{fontSize: 10, color: '#000000',marginTop:30}}>Email</Text>
         <TextInput
        style={{
          fontSize: 20,
          borderColor: '#000000',
          borderWidth: 2,
          color: '#000000'
        }}
        onChangeText={text => setMail(text)}
        placeholder="Enter Email"
      />
       <Text style={{fontSize: 10, color: '#000000',marginTop:30}}>Phone Number</Text>
         <TextInput
        style={{
          fontSize: 20,
          borderColor: '#000000',
          borderWidth: 2,
          color: '#000000',
          marginBottom:30
        }}
        onChangeText={text => setPhoneNumber(text)}
        placeholder="Enter Phone Number"
      />
        <Button
        title="Submit your Identity"
        style={{marginTop: 20}}
        onPress={() => props.navigation.navigate('Identity',{name,email,phoneNumber})}
      />
        </View>
    );
};
