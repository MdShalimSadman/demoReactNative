import {Text, Button, View} from 'react-native';

export const Identity = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: '#000000'}}>Identity</Text>
      <Text style={{fontSize: 30, color: '#000000'}}>
        Name:{props.route.params.name}
      </Text>
      <Text style={{fontSize: 30, color: '#000000'}}>
        Email:{props.route.params.email}
      </Text>
      <Text style={{fontSize: 30, color: '#000000'}}>
        Phone Number:{props.route.params.phoneNumber}
      </Text>
    </View>
  );
};
