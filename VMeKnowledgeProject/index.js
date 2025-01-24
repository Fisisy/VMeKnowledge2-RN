import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MainTab from './routes'
import {connect} from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/NoAuth/Login'
import RegisterScreen from './screens/NoAuth/Register'


const mapStateToProps = state => {
  return {
    isLogin: state.User.isLogin
  }
}

const Stack = createStackNavigator();

class Index extends Component {
  render() {
    return (
      <>
        {this.props.isLogin ? (
          <MainTab />
        ) : (
          <Stack.Navigator
            headerShown={false}
            screenOptions={({route}) => ({
              headerShown: false,
            })}
            initialRouteName={'Login'}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps)(Index);

const styles = StyleSheet.create({});
