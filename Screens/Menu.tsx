import {Text, Button, View} from 'react-native';

export const Menu = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: '#000000'}}>Menu</Text>
      <Text style={{fontSize: 30, color: '#000000'}}>
        Email:{props.route.params.email}
      </Text>
      <Button
        title=" Home"
        style={{marginTop: 20}}
        onPress={() => props.navigation.navigate('Home')}
      />
      <Button
        title="Chat"
        style={{marginTop: 20}}
        onPress={() => props.navigation.navigate('Chat')}
      />

      <Button
        title="Profile"
        style={{marginTop: 20}}
        onPress={() => props.navigation.navigate('Profile')}
      />
    </View>
  );
};
