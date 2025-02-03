import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert, TouchableOpacity} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
// import TouchableOpacity from 'module'

import KnowledgeScreen from '../screens/Knowledge'
import AddKnowledgeScreen from '../screens/Knowledge/AddKnowledge'
import ChangeKnowledgeScreen from '../screens/Knowledge/ChangeKnowledge'

const Stack = createStackNavigator();

export default class Knowledge extends Component {
  render() {
    return (
      <Stack.Navigator
              initialRouteName="Knowledge"
              //headerMode={'none'}
            >
              <Stack.Screen
                name="Knowledge"
                component={KnowledgeScreen}
                options={{
                  title: '知识库', //自定义标题栏的标题
                  // 自定义标题栏样式
                  headerStyle: {
                    backgroundColor: '#fff', // 自定义标题栏背景颜色
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
              <Stack.Screen
                name="AddKnowledge"
                component={AddKnowledgeScreen}
                options={{
                  title: '新建芝士', //自定义标题栏的标题
                  // 自定义标题栏样式
                }}
              />
              <Stack.Screen
                name="ChangeKnowledge"
                component={ChangeKnowledgeScreen}
                options={{
                  title: '修改芝士', //自定义标题栏的标题
                  // 自定义标题栏样式
                }}
              />
              {/* <Stack.Screen name="News" component={NewsScreen} /> */}
              {/* <Stack.Screen name="AddKnowledge" component={AddKnowledgeScreen} /> */}
            </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
