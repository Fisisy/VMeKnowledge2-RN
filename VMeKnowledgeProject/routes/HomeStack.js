import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert, TouchableOpacity} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
// import TouchableOpacity from 'module'

import HomeScreen from '../screens/Home'

const Stack = createStackNavigator();

export default class HomeStack extends Component {
  render() {
    return (
      <Stack.Navigator
              initialRouteName="Home"
              //headerMode={'none'}
            >
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  title: '首页', //自定义标题栏的标题
                  // 自定义标题栏样式
                  headerStyle: {
                    backgroundColor: 'tomato', // 自定义标题栏背景颜色
                  },
                  headerRight: () => {
                    return (
                      <TouchableOpacity onPress={() => Alert.alert('Hello')}>
                        <Text style={{marginRight: 15}}>Hello</Text>
                      </TouchableOpacity>
                    );
                  },
                }}
              />
              {/* <Stack.Screen name="News" component={NewsScreen} /> */}
            </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
