import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {View, Text, StyleSheet} from 'react-native';

const Stack = createStackNavigator();
import {Button, Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{header: (props) => <CustomNavigationBar{...props} />,
        }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Second' component={SecondScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function HomeScreen({ navigation }){
  return(
    <View style={styles.container}>
      <Text>Eka Screen</Text>
    </View>
  );
}

function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text>Toka Screen</Text>
    </View>
  );
}

function CustomNavigationBar({ navigation, route, options, back }) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : null}
      <Appbar.Content title={title} />
      {!back && (
        <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('Second')} />
      )}
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
